import styles from "./index.module.css";

const SearchBar = () => {
  const cities = ["Kochi", "Pune", "Mumbai", "Bangalore"];
  const propertyTypes = [
    "Apartment",
    "Holiday Homes",
    "Resale Properties",
    "Co-working Space",
  ];

  // Inline SVG for the search and chevron icons to avoid external dependencies
  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
    </svg>
  );
  const chevronDownIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.dropdownContainer}>
        <label htmlFor="city-select" className={styles.dropdownLabel}>
          City
        </label>
        <div className={styles.dropdown}>
          <select id="city-select">
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <span className={styles.dropdownIcon}>{chevronDownIcon}</span>
        </div>
      </div>
      <div className={styles.searchInput}>
        <label htmlFor="city-select" className={styles.dropdownLabel}>
          Search
        </label>

        <input type="text" placeholder="Search" />
      </div>
      <div className={styles.dropdownContainer}>
        <label htmlFor="type-select" className={styles.dropdownLabel}>
          Type
        </label>
        <div className={styles.dropdown}>
          <select id="type-select">
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <span className={styles.dropdownIcon}>{chevronDownIcon}</span>
        </div>
      </div>

      <button className={styles.searchButton}>{searchIcon}</button>
    </div>
  );
};

export default SearchBar;
