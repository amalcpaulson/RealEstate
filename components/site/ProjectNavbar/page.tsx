"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SearchBar, type SearchValues } from "@/components/SearchBar/page";
import { BellDot, Building2Icon, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import styles from "./index.module.css";

export default function ProjectNavbar() {
  const router = useRouter();

  function handleSearch(values: SearchValues) {
    const params = new URLSearchParams();
    if (values.city) params.set("city", values.city);
    if (values.q) params.set("q", values.q);
    if (values.type) params.set("type", values.type);
    // Navigate to homepage with filters (can be changed to "/projects" when a listing page exists)
    router.push(`/?${params.toString()}`);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logoLink}>
            <Building2Icon size={28} color="white" />
          </Link>
          <div className={styles.searchBar}>
            <SearchBar onSearch={handleSearch} hideTopBar />
          </div>
          <div className={styles.userActions}>
            <Button variant="ghost" size="sm">
              <BellDot size={18} color="white" />
            </Button>
            <Button className={styles.profileButton}>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Sophia
              <ChevronDown size={16} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}