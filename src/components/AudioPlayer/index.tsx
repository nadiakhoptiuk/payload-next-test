'use client'

import raf from 'raf'
import React, { useRef, useState, useEffect, useCallback } from 'react'
import ReactHowler from 'react-howler'
import { ICONS } from '../ui/icons/icons'
import { formatPlayerSeekTime } from '@/utilities/formatPlayerSeekTime'
import { RangeInput } from './components/RangeInput'
import { PlayButton } from './components/PlayButton'

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

  const handleMouseUpSeek = (value: number) => {
    setIsSeeking(false)
    if (playerRef.current) {
      playerRef.current.seek(value)
    }
  }

  const handleSeekingChange = (value: number) => {
    setSeek(value)
    if (playerRef.current) {
      playerRef.current.seek(value)
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

      <div
        className={`${loaded ? 'bg-accent flex items-center w-full py-[1.38rem] pl-8 pr-6 border-[1px] border-solid border-border-player' : 'hidden'}`}
      >
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

        <PlayButton playing={playing} handleToggle={handleToggle} className="mr-8" />

        <div className="flex items-center flex-1 gap-4">
          <span className="text-white min-w-[3.44rem]">{formatPlayerSeekTime(seek)}</span>

          <RangeInput
            min={0}
            max={duration || 0}
            step={0.01}
            value={seek}
            onChange={handleSeekingChange}
            onMouseDown={handleMouseDownSeek}
            onMouseUp={handleMouseUpSeek}
            className="flex-1"
            ariaLabel="Progress"
          />

          <span className="text-white min-w-[3rem]">
            {duration ? formatPlayerSeekTime(duration) : '--:--'}
          </span>
        </div>
        <div className="flex items-center justify-center gap-[0.38rem] ml-4">
          <ICONS.volume width={24} height={20} />

          <span className="w-[6.88rem]">
            <RangeInput
              min={0}
              max={1}
              step={0.05}
              value={volume}
              onChange={(value) => setVolume(value)}
              ariaLabel="Volume"
            />
          </span>
        </div>
      </div>
    </>
  )
}
