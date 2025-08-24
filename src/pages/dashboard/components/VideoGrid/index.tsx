import React from 'react'
import { Play, Pause, Volume2 } from 'lucide-react'
import styles from './VideoGrid.module.css'

interface VideoItem {
  id: number
  thumbnail: string
  isPlaying?: boolean
  hasAudio?: boolean
}

const VideoGrid: React.FC = () => {
  const videos: VideoItem[] = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      isPlaying: false,
      hasAudio: true
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      isPlaying: true,
      hasAudio: false
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      isPlaying: false,
      hasAudio: true
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      isPlaying: true,
      hasAudio: false
    }
  ]

  return (
    <div className={styles.videoGrid}>
      {videos.map((video) => (
        <div key={video.id} className={styles.videoItem}>
          <div className={styles.videoThumbnail}>
            <img src={video.thumbnail} alt={`Video ${video.id}`} />
            <div className={styles.videoOverlay}>
              <div className={styles.playButton}>
                {video.isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </div>
              <div className={styles.videoControls}>
                <button className={styles.controlButton}>
                  <Volume2 size={16} />
                </button>
                <button className={styles.controlButton}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VideoGrid
