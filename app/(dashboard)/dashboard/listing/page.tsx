import { ListingTable } from "@/components/dashboard/listing-table";
import styles from "./index.module.css";

export default function ListingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome back to Realtor 👋🏻</h1>
      </div>
      <ListingTable />
    </div>
  );
}
