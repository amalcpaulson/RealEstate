
import React from 'react';
import styles from './index.module.css';
import PhoenixLogo from '../../assets/Phoenix.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img  src={PhoenixLogo} className={styles.logo} alt="" />
        <nav className={styles.nav}>
          <a href="#">Projects</a>
          <a href="#">Builders</a>
          <a href="#">Partner with us</a>
        </nav>
      </div>
      <div className={styles.right}>
        <button className={styles.createAccount}>Create Account</button>
        <button className={styles.login}>Login</button>
      </div>
    </header>
  );
};

export default Header;