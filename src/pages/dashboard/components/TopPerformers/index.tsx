import React from 'react'
import { TrendingUp } from 'lucide-react'
import styles from './TopPerformers.module.css'

interface Performer {
  name: string
  platform: string
  value: number
  unit: string
  avatar: string
}

const TopPerformers: React.FC = () => {
  const performers: Performer[] = [
    {
      name: 'Assetz',
      platform: 'Instagram',
      value: 3500,
      unit: '18',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    },
    {
      name: 'Assetz',
      platform: 'Youtube',
      value: 846,
      unit: '14',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    },
    {
      name: 'Assetz',
      platform: 'Instagram',
      value: 200,
      unit: '17',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      name: 'Assetz',
      platform: 'Youtube',
      value: 24,
      unit: '15',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <TrendingUp size={20} />
          <span>Top Performers</span>
        </div>
        <button className={styles.seeAll}>See All Listing</button>
      </div>
      
      <div className={styles.performersList}>
        {performers.map((performer, index) => (
          <div key={index} className={styles.performerItem}>
            <div className={styles.performerInfo}>
              <div className={styles.avatar}>
                <img src={performer.avatar} alt={performer.name} />
              </div>
              <div className={styles.details}>
                <div className={styles.name}>{performer.name}</div>
                <div className={styles.platform}>{performer.platform}</div>
              </div>
            </div>
            <div className={styles.stats}>
              <div className={styles.value}>{performer.value.toLocaleString()}</div>
              <div className={styles.unit}>{performer.unit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopPerformers
