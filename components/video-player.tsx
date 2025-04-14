"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, X, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"

interface VideoPlayerProps {
  videoSrc: string
  posterSrc: string
  isOpen: boolean
  onClose: () => void
}

export default function VideoPlayer({ videoSrc, posterSrc, isOpen, onClose }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false)
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }, [isOpen])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setError(null)
            })
            .catch((err) => {
              setError("Video playback failed. Please try again or use the controls below.")
              console.error("Video playback error:", err)
            })
        }
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4 rounded-xl overflow-hidden bg-[#0a0f18] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Close video"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative aspect-video">
          {error ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0f18] p-8">
              <Image
                src={posterSrc || "/images/cooking-video-preview.jpg"}
                alt="Video preview"
                width={1280}
                height={720}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 text-center">
                <p className="text-red-400 mb-4">{error}</p>
                <p className="text-gray-300 max-w-md mx-auto">
                  Due to browser restrictions, videos may not autoplay. Please use the play button below to start the
                  video manually.
                </p>
              </div>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                src={videoSrc}
                poster={posterSrc || "/images/cooking-video-preview.jpg"}
                className="w-full h-full object-cover"
                playsInline
                preload="metadata"
                onClick={togglePlay}
                onEnded={() => setIsPlaying(false)}
                onError={() => setError("Video failed to load. Please try again later.")}
              />

              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <button
                    onClick={togglePlay}
                    className="p-4 rounded-full bg-[#3b82f6]/80 text-white hover:bg-[#3b82f6] transition-colors transform hover:scale-105"
                    aria-label="Play video"
                  >
                    <Play className="h-12 w-12 fill-white" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        <div className="p-4 bg-[#0a0f18] flex items-center justify-between">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-[#1e293b] text-white hover:bg-[#334155] transition-colors"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>

          <div className="text-white font-medium">Foodyari Cooking Masterclass</div>

          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-[#1e293b] text-white hover:bg-[#334155] transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </div>
  )
}
