import { SearchBar } from "@/components/buyer/search-bar";
import { PropertyCard } from "@/components/buyer/property-card";
import { POPULAR_BY_CITY } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/site/Navbar/page";
import styles from "./index.module.css";

export default function HomePage() {
  const kochi = POPULAR_BY_CITY.Kochi;
  const pune = POPULAR_BY_CITY.Pune;

  return (
    <div>
      {/* Hero with background (CSS background-image) */}
      <section className={styles.heroSection}>
        <div
          className={styles.heroContainer}
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        >
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <Navbar />
            <div className={styles.searchBarContainer}>
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Popular sections */}
      <section className={styles.popularSection}>
        <h2 className={styles.sectionTitle}>
          Popular Properties in Kochi
          <ChevronRight />
        </h2>
        <div className={styles.propertyGrid}>
          {kochi.map((p) => (
            <PropertyCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section className={styles.popularSection}>
        <h2 className={styles.sectionTitle}>
          Popular Properties in Pune
          <ChevronRight />
        </h2>
        <div className={styles.propertyGrid}>
          {pune.map((p) => (
            <PropertyCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}