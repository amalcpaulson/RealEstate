"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CITIES, PROPERTY_TYPES } from "@/lib/data";
import { Home, Building, Search, TreeDeciduous, Leaf } from "lucide-react";
import SearchTopLink from "../SearchTopLink/page";

import styles from "./index.module.css";

export type SearchValues = {
  city?: string;
  q?: string;
  type?: string;
};

export function SearchBar({
  onSearch,
  hideTopBar,
}: {
  onSearch?: (v: SearchValues) => void;
  hideTopBar?: boolean;
}) {
  const [values, setValues] = React.useState<SearchValues>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch?.(values);
  }

  return (
    <div className={styles.container}>
      {!hideTopBar && (
        <div className={styles.topBar}>
          <SearchTopLink
            items={[
              {
                label: "Apartments",
                value: "apartments",
                icon: <Building size={12} />,
              },
              {
                label: "Holiday Homes",
                value: "holiday-homes",
                icon: <TreeDeciduous size={12} />,
              },
              {
                label: "Resale Properties",
                value: "resale-properties",
                icon: <Home size={12} />,
              },
              {
                label: "Co-working Space",
                value: "coworking-space",
                icon: <Leaf size={12} />,
              },
            ]}
          />
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        aria-label="Search properties"
      >
        {/* City Selector */}
        <div className={`${styles.field} ${styles.borderRight}`}>
          {!hideTopBar && <span className={styles.label}>City</span>}
          <NativeSelect
            aria-label="City"
            defaultValue={CITIES[0]}
            onChange={(e) => setValues((s) => ({ ...s, city: e.target.value }))}
            className={styles.select}
          >
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </NativeSelect>
        </div>

        {/* Search Input */}
        <div className={`${styles.field} ${styles.searchField} ${styles.borderRight}`}>
          {!hideTopBar && <span className={styles.label}>Search</span>}
          <Input
            aria-label="Search"
            placeholder="Search Destination"
            onChange={(e) => setValues((s) => ({ ...s, q: e.target.value }))}
            className={styles.input}
          />
        </div>

        {/* Type Selector */}
        <div className={styles.field}>
          {!hideTopBar && <span className={styles.label}>Type</span>}
          <NativeSelect
            aria-label="Type"
            defaultValue={PROPERTY_TYPES[0]}
            onChange={(e) => setValues((s) => ({ ...s, type: e.target.value }))}
            className={styles.select}
          >
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </NativeSelect>
        </div>

        {/* Search Button */}
        <Button type="submit" className={styles.button}>
          <Search size={16} />
        </Button>
      </form>
    </div>
  );
}
