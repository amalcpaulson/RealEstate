import React from "react";
import styles from "./index.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>550+ People Managed Homes in Goa with Us</h2>
          <button className={styles.ctaButton}>Talk to Us</button>
        </div>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h4>Discover</h4>
          <ul>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Properties</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Properties</h4>
          <ul>
            <li><a href="#">Apartment</a></li>
            <li><a href="#">Villa</a></li>
            <li><a href="#">Plot</a></li>
            <li><a href="#">Co-Working Space</a></li>
            <li><a href="#">Holiday Homes</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Services</h4>
          <ul>
            <li><a href="#">List Your Property</a></li>
            <li><a href="#">Rent Your Property</a></li>
            <li><a href="#">Housing Loans</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Address</h4>
          <address>
            3rd Floor, Innerspace Business Centre<br />
            Kochi, Kerala, 682020<br />
            Phone: +91 95 82 48 25 78<br />
            Email: mega@realtor.com
          </address>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.copyright}>
          REALTOR.COM © 2024 ALL RIGHTS RESERVED
        </div>
        <div className={styles.links}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;