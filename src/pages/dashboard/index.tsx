import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import StatsCards from '../StatsCards/StatsCards'
import Chart from '../Chart/Chart'
import TopPerformers from '../TopPerformers/TopPerformers'
import VideoGrid from '../VideoGrid/VideoGrid'
import styles from './Dashboard.module.css'

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <StatsCards />
          <div className={styles.chartSection}>
            <Chart />
            <TopPerformers />
          </div>
          <VideoGrid />
        </div>
      </main>
    </div>
  )
}

export default Dashboard
