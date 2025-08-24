export type PropertyType = "Apartment" | "Villa" | "Plot";

export type Project = {
  id: string;
  slug: string;
  title: string;
  city: string; // e.g., Kochi, Pune
  location: string; // neighborhood or address snippet
  price: number; // starting price
  priceStr: string; // starting price
  bedrooms: number; // primary configuration for card display
  areaSqft?: number;
  image: string; // cover image url
  logo: string; // builder logo
  type: PropertyType;
};
