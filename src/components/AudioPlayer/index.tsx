'use client'

import raf from 'raf'
import React, { useRef, useState, useEffect, useCallback, ChangeEvent } from 'react'
import ReactHowler from 'react-howler'

type AudioPlayerProps = {
  src?: string
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src = 'http://goldfirestudios.com/proj/howlerjs/sound.ogg',
}) => {
  const [playing, setPlaying] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [volume, setVolume] = useState<number>(1.0)
  const [seek, setSeek] = useState<number>(0.0)
  const [isSeeking, setIsSeeking] = useState<boolean>(false)
  const [duration, setDuration] = useState<number | undefined>(undefined)

  const playerRef = useRef<ReactHowler | null>(null)
  const rafId = useRef<number | null>(null)

  const clearRAF = useCallback(() => {
    if (rafId.current !== null) {
      raf.cancel(rafId.current)
    }
  }, [])

  const handleToggle = () => {
    setPlaying((prev) => !prev)
  }

  const handleOnLoad = () => {
    setLoaded(true)
    if (playerRef.current) {
      setDuration(playerRef.current.duration())
    }
  }

  const handleOnPlay = () => {
    setPlaying(true)
  }

  const handleOnEnd = () => {
    setPlaying(false)
    clearRAF()
  }

  const handleMouseDownSeek = () => {
    setIsSeeking(true)
  }

  const handleMouseUpSeek = (e: React.MouseEvent<HTMLInputElement>) => {
    setIsSeeking(false)
    const seekValue = parseFloat(e.currentTarget.value)
    playerRef.current?.seek(seekValue)
    setSeek(seekValue)
  }

  const handleSeekingChange = (e: ChangeEvent<HTMLInputElement>) => {
    const seekValue = parseFloat(e.currentTarget.value)
    setSeek(seekValue)
    if (playerRef.current) {
      playerRef.current.seek(seekValue)
    }
  }

  useEffect(
    () => {
      const renderSeekPos = () => {
        if (!isSeeking && playerRef.current && playing) {
          setSeek(playerRef.current.seek())
        }
        if (playing) {
          rafId.current = raf(renderSeekPos)
        }
      }

      renderSeekPos()

      return () => clearRAF()
    },
    [isSeeking, playing, clearRAF] as const,
  )

  return (
    <>
      {!loaded && <p>Loading...</p>}

      <div className={`${loaded ? 'block' : 'hidden'}`}>
        <ReactHowler
          src={src}
          playing={playing}
          onLoad={handleOnLoad}
          onPlay={handleOnPlay}
          onEnd={handleOnEnd}
          loop={false}
          mute={false}
          volume={volume}
          ref={playerRef}
        />

        <p>
          {'Status: '}
          {seek.toFixed(2)} / {duration ? duration.toFixed(2) : 'NaN'}
        </p>

        <div className="volume">
          <label>
            Volume:
            <span className="slider-container">
              <input
                type="range"
                min="0"
                max="1"
                step=".05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
              />
            </span>
            {volume.toFixed(2)}
          </label>
        </div>

        <div className="seek">
          <label>
            Seek:
            <span className="slider-container">
              <input
                type="range"
                min="0"
                max={duration ? duration.toFixed(2) : '0'}
                step=".01"
                value={seek}
                onChange={handleSeekingChange}
                onMouseDown={handleMouseDownSeek}
                onMouseUp={handleMouseUpSeek}
              />
            </span>
          </label>
        </div>

        <button onClick={handleToggle}>{playing ? 'Pause' : 'Play'}</button>
      </div>
    </>
  )
}
