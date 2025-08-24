import React from 'react'
import { Eye, ThumbsUp, Users } from 'lucide-react'
import styles from './StatsCards.module.css'

interface StatCard {
  icon: React.ReactNode
  title: string
  value: string
  change: string
  isPositive: boolean
}

const StatsCards: React.FC = () => {
  const stats: StatCard[] = [
    {
      icon: <Eye size={20} />,
      title: 'Total Views',
      value: '34.3M',
      change: '+2.3%',
      isPositive: true
    },
    {
      icon: <ThumbsUp size={20} />,
      title: 'Total Likes',
      value: '343K',
      change: '+1.2%',
      isPositive: true
    },
    {
      icon: <Users size={20} />,
      title: 'Total Leads',
      value: '3.5K',
      change: '+2.3%',
      isPositive: true
    }
  ]

  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.iconWrapper}>
              {stat.icon}
            </div>
            <div className={styles.chartMini}>
              <svg width="80" height="32" viewBox="0 0 80 32">
                <path
                  d="M0,20 Q10,15 20,18 T40,16 T60,12 T80,8"
                  stroke="#4299e1"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
          <div className={styles.statContent}>
            <div className={styles.statTitle}>{stat.title}</div>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={`${styles.statChange} ${stat.isPositive ? styles.positive : styles.negative}`}>
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards
