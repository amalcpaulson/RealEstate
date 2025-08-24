import React, { useState } from 'react';
import SearchBar from '../../components/searchBar';
import PropertyList from '../../components/propertyList';
import Footer from '../../components/footer';
import styles from './index.module.css';

import apartments from '../projectListing/assets/apartments.png'; // Reuse from ProjectListing assets
import homes from '../projectListing/assets/homes.png';
import resale from '../projectListing/assets/resale.png';
import space from '../projectListing/assets/space.png';
import Header from '../projectListing/components/header';

export const ProjectDetails = () => {
  const [activePropertyType, setActivePropertyType] = useState<string>('Apartment'); // Default to property type

  // Mock property data
  const property = {
    id: 1,
    city: 'Kochi',
    title: '3 & 4 BHK Apartments at Shobha Marina One',
    price: '₹3.85Cr',
    image: 'https://placehold.co/1200x600/E9E9E9/000?text=Main+Property+Image',
    location: 'Kochi, Kerala',
    description: 'Shobha Marina One offers luxurious 3 & 4 BHK apartments with stunning sea views, modern amenities, and premium finishes.',
    amenities: ['Swimming Pool', 'Gymnasium', 'Clubhouse', '24/7 Security', 'Parking', 'Garden & Parks'],
    gallery: [
      'https://placehold.co/400x300/D9D9D9/000?text=Gallery+1',
      'https://placehold.co/400x300/C9C9C9/000?text=Gallery+2',
      'https://placehold.co/400x300/B9B9B9/000?text=Gallery+3',
    ],
  };

  // Mock related properties
  const relatedProperties = [
    {
      id: 2,
      city: 'Kochi',
      title: '3 & 4 BHK Apartments at Shobha Marina One',
      price: '₹5.13Cr',
      image: 'https://placehold.co/600x400/D9D9D9/000?text=Related+Property+1',
      location: 'Kochi, Kerala',
    },
    {
      id: 3,
      city: 'Kochi',
      title: 'Luxurious Villa in Marine Drive',
      price: '₹4.5Cr',
      image: 'https://placehold.co/600x400/C9C9C9/000?text=Related+Property+2',
      location: 'Kochi, Kerala',
    },
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted');
  };

  return (
    <div className={styles.appContainer}>
      <Header />
      <main>
        <div className={styles.heroSection} style={{ backgroundImage: `url(${property.image})` }}>
          <div className={styles.heroButtons}>
            <button
              className={activePropertyType === 'Apartment' ? styles.activeButton : ''}
              onClick={() => setActivePropertyType('Apartment')}
            >
              <img src={apartments} alt="" /> Apartment
            </button>
            <button
              className={activePropertyType === 'Holiday Homes' ? styles.activeButton : ''}
              onClick={() => setActivePropertyType('Holiday Homes')}
            >
              <img src={homes} alt="" /> Holiday Homes
            </button>
            <button
              className={activePropertyType === 'Resale Properties' ? styles.activeButton : ''}
              onClick={() => setActivePropertyType('Resale Properties')}
            >
              <img src={resale} alt="" /> Resale Properties
            </button>
            <button
              className={activePropertyType === 'Co-working Space' ? styles.activeButton : ''}
              onClick={() => setActivePropertyType('Co-working Space')}
            >
              <img src={space} alt="" /> Co-working Space
            </button>
          </div>
          <SearchBar />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.propertyDetailsGrid}>
            <div className={styles.leftColumn}>
              <div className={styles.gallery}>
                {property.gallery.map((img, index) => (
                  <img key={index} src={img} alt={`Gallery ${index + 1}`} className={styles.galleryImage} />
                ))}
              </div>
              <div className={styles.amenities}>
                <h3>Amenities</h3>
                <ul>
                  {property.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <h1 className={styles.title}>{property.title}</h1>
              <p className={styles.price}>{property.price}</p>
              <p className={styles.location}>{property.location}</p>
              <p className={styles.description}>{property.description}</p>
              <form onSubmit={handleInquirySubmit} className={styles.inquiryForm}>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Phone" required />
                <button type="submit">Send Inquiry</button>
              </form>
            </div>
          </div>
          <PropertyList title="Similar Properties in Kochi" properties={relatedProperties} />
        </div>
      </main>
      <Footer />
    </div>
  );
};