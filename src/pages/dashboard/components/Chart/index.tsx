import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import styles from './Chart.module.css'

const Chart: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('Instagram')
  const [selectedPeriod, setSelectedPeriod] = useState('1W')

  const platforms = ['Instagram', 'Youtube']
  const periods = ['1D', '1W', '1M']

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartHeader}>
        <div className={styles.platformTabs}>
          {platforms.map((platform) => (
            <button
              key={platform}
              className={`${styles.platformTab} ${selectedPlatform === platform ? styles.active : ''}`}
              onClick={() => setSelectedPlatform(platform)}
            >
              {platform}
            </button>
          ))}
        </div>
        <div className={styles.controls}>
          <div className={styles.dropdown}>
            <span>Total Views</span>
            <ChevronDown size={16} />
          </div>
          <div className={styles.dropdown}>
            <span>All Platforms</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
      
      <div className={styles.chartValue}>
        <span className={styles.value}>58.8M</span>
        <span className={styles.change}>↗ 0.48%</span>
      </div>
      
      <div className={styles.periodTabs}>
        {periods.map((period) => (
          <button
            key={period}
            className={`${styles.periodTab} ${selectedPeriod === period ? styles.active : ''}`}
            onClick={() => setSelectedPeriod(period)}
          >
            {period}
          </button>
        ))}
      </div>
      
      <div className={styles.chartArea}>
        <svg width="100%" height="200" viewBox="0 0 800 200">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4299e1" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#4299e1" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e53e3e" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#e53e3e" stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          {/* Blue line */}
          <path
            d="M50,150 Q100,120 150,130 T250,110 T350,90 T450,100 T550,80 T650,70 T750,60"
            stroke="#4299e1"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M50,150 Q100,120 150,130 T250,110 T350,90 T450,100 T550,80 T650,70 T750,60 L750,200 L50,200 Z"
            fill="url(#gradient1)"
          />
          
          {/* Red line */}
          <path
            d="M50,160 Q100,140 150,145 T250,125 T350,105 T450,115 T550,95 T650,85 T750,75"
            stroke="#e53e3e"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M50,160 Q100,140 150,145 T250,125 T350,105 T450,115 T550,95 T650,85 T750,75 L750,200 L50,200 Z"
            fill="url(#gradient2)"
          />
          
          {/* Data point */}
          <circle cx="400" cy="100" r="4" fill="#4299e1" />
          <rect x="380" y="85" width="40" height="20" rx="4" fill="#1a202c" />
          <text x="400" y="97" textAnchor="middle" fill="white" fontSize="12">3982</text>
        </svg>
        
        <div className={styles.xAxis}>
          {['20k', '15k', '10k', '0', '20k', '15k', '10k', '0', '20k', '15k', '10k', '0', '20k', '15k'].map((label, index) => (
            <span key={index} className={styles.axisLabel}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Chart
