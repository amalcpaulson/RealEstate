
import React from 'react';
import styles from './index.module.css';
import locationimg from './assets/distance.png'
import bookmark from './assets/bookmark.png'

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ image, title, price, location }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.label}>ASSETZ</div>
      </div>
      <div className={styles.content}>
        <p className={styles.location}><img src={locationimg} alt="" /> {location}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price} <img src={bookmark} alt="" /></p>
      </div>
    </div>
  );
};

export default PropertyCard;