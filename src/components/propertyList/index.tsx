
import React from 'react';
import styles from './index.module.css';
import PropertyCard from '../propertyCard';
import arrow from './arrow.png'

interface Property {
  id: number;
  city: string;
  title: string;
  price: string;
  image: string;
  location: string;
}

interface PropertyListProps {
  title: string;
  properties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({ title, properties }) => {
  return (
    <section className={styles.propertyList}>
      <h2 className={styles.title}>{title} <img src={arrow} alt="" /></h2>
      <div className={styles.grid}>
        {properties.map(property => (
          <PropertyCard
            key={property.id}
            image={property.image}
            title={property.title}
            price={property.price}
            location={property.location}
          />
        ))}
      </div>
    </section>
  );
};

export default PropertyList;