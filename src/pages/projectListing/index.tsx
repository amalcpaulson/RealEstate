// src/App.tsx

import React, { useState } from "react";
import Header from "./components/header";
import SearchBar from "../../components/searchBar";
import PropertyList from "../../components/propertyList";
import Footer from "../../components/footer";
import styles from "./index.module.css";

import apartments from './assets/apartments.png'
import homes from './assets/homes.png'
import resale from './assets/resale.png'
import space from './assets/space.png'

const ProjectListing: React.FC = () => {
  const [activePropertyType, setActivePropertyType] = useState<string>('Apartment');

  const propertyData = [
    {
      id: 1,
      city: "Kochi",
      title: "3 & 4 BHK Apartments at Shobha Marina One",
      price: "₹3.85Cr",
      image: "https://placehold.co/600x400/E9E9E9/000?text=Property+Image+1",
      location: "Kochi, Kerala",
    },
    {
      id: 2,
      city: "Kochi",
      title: "3 & 4 BHK Apartments at Shobha Marina One",
      price: "₹5.13Cr",
      image: "https://placehold.co/600x400/D9D9D9/000?text=Property+Image+2",
      location: "Kochi, Kerala",
    },
    {
      id: 3,
      city: "Pune",
      title: "Luxurious Villa in Koregaon Park",
      price: "₹7.5Cr",
      image: "https://placehold.co/600x400/C9C9C9/000?text=Property+Image+3",
      location: "Pune, Maharashtra",
    },
    {
      id: 4,
      city: "Pune",
      title: "Modern 2 BHK at Viman Nagar",
      price: "₹1.2Cr",
      image: "https://placehold.co/600x400/B9B9B9/000?text=Property+Image+4",
      location: "Pune, Maharashtra",
    },
     {
      id: 1,
      city: "Kochi",
      title: "3 & 4 BHK Apartments at Shobha Marina One",
      price: "₹3.85Cr",
      image: "https://placehold.co/600x400/E9E9E9/000?text=Property+Image+1",
      location: "Kochi, Kerala",
    },
    {
      id: 2,
      city: "Kochi",
      title: "3 & 4 BHK Apartments at Shobha Marina One",
      price: "₹5.13Cr",
      image: "https://placehold.co/600x400/D9D9D9/000?text=Property+Image+2",
      location: "Kochi, Kerala",
    },
    {
      id: 3,
      city: "Pune",
      title: "Luxurious Villa in Koregaon Park",
      price: "₹7.5Cr",
      image: "https://placehold.co/600x400/C9C9C9/000?text=Property+Image+3",
      location: "Pune, Maharashtra",
    },
    {
      id: 4,
      city: "Pune",
      title: "Modern 2 BHK at Viman Nagar",
      price: "₹1.2Cr",
      image: "https://placehold.co/600x400/B9B9B9/000?text=Property+Image+4",
      location: "Pune, Maharashtra",
    },
  ];

  const kochiProperties = propertyData.filter((p) => p.city === "Kochi");
  const puneProperties = propertyData.filter((p) => p.city === "Pune");

  return (
    <div className={styles.appContainer}>
      <Header />
      <main>
        <div className={styles.heroSection}>
          <div className={styles.heroButtons}>
            <button
              className={activePropertyType === 'Apartment' ? 'activeButton' : ''}
              onClick={() => setActivePropertyType('Apartment')}
            >
              <img src={apartments} alt="" /> Apartment
            </button>
            <button
              className={activePropertyType === 'Holiday Homes' ? 'activeButton' : ''}
              onClick={() => setActivePropertyType('Holiday Homes')}
            >
              <img src={homes} alt="" /> Holiday Homes
            </button>
            <button
              className={activePropertyType === 'Resale Properties' ? 'activeButton' : ''}
              onClick={() => setActivePropertyType('Resale Properties')}
            >
              <img src={resale} alt="" /> Resale Properties
            </button>
            <button
              className={activePropertyType === 'Co-working Space' ? 'activeButton' : ''}
              onClick={() => setActivePropertyType('Co-working Space')}
            >
              <img src={space} alt="" /> Co-working Space
            </button>
          </div>
          <SearchBar />
        </div>
        <div className={styles.mainContent}>
          <PropertyList
            title="Popular Properties in Kochi"
            properties={kochiProperties}
          />
          <PropertyList
            title="Popular Properties in Pune"
            properties={puneProperties}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectListing;