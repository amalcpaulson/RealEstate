import React from 'react'
import { Plus } from 'lucide-react'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>Welcome back to Realtor</h1>
        <span className={styles.emoji}>👋</span>
      </div>
      <button className={styles.createButton}>
        <Plus size={16} />
        Create Request
      </button>
    </header>
  )
}

export default Header
