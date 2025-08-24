import React from 'react'
import { LayoutDashboard, List, Users, Settings, HelpCircle } from 'lucide-react'
import styles from './Sidebar.module.css'

interface MenuItem {
  icon: React.ReactNode
  label: string
  active?: boolean
}

const Sidebar: React.FC = () => {
  const menuItems: MenuItem[] = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <List size={20} />, label: 'Listing' },
    { icon: <Users size={20} />, label: 'Teams' }
  ]

  const bottomItems: MenuItem[] = [
    { icon: <Settings size={20} />, label: 'Settings' },
    { icon: <HelpCircle size={20} />, label: 'Support' }
  ]

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <div className={styles.logoSymbol}></div>
        </div>
        <span className={styles.logoText}>Assetz</span>
      </div>
      
      <nav className={styles.nav}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>MAIN</div>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`${styles.menuItem} ${item.active ? styles.active : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        
        <div className={styles.bottomSection}>
          {bottomItems.map((item, index) => (
            <a key={index} href="#" className={styles.menuItem}>
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
      
      <div className={styles.userProfile}>
        <div className={styles.avatar}>
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Arthur Tylor" />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userName}>Arthur Tylor</div>
          <div className={styles.userEmail}>arthur@assetz.com</div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
