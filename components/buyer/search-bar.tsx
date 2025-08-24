"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CITIES, PROPERTY_TYPES } from "@/lib/data";
import { Home, Building, Search, TreeDeciduous, Leaf } from "lucide-react";
import SearchTopLink from "./search-top-link";

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
    <div className="flex items-center justify-center flex-col gap-3 w-full">
      {!hideTopBar && (
        <div className="flex items-center gap-2 text-white/50 text-[12px]">
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
        className="mx-auto flex w-full items-center gap-2 rounded-full border bg-background p-2 px-4 backdrop-blur"
        aria-label="Search properties"
      >
        <div className="flex min-w-48 flex-col gap-0 px-1 border-r">
          {!hideTopBar && <span className="text-xs">City</span>}
          <NativeSelect
            aria-label="City"
            defaultValue={CITIES[0]}
            onChange={(e) => setValues((s) => ({ ...s, city: e.target.value }))}
            className="rounded-full"
          >
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </NativeSelect>
        </div>

        <div className="flex flex-col min-w-74 gap-0 px-1 border-r">
          {!hideTopBar && <span className="text-xs">Search</span>}
          <Input
            aria-label="Search"
            placeholder="Search Destination"
            onChange={(e) => setValues((s) => ({ ...s, q: e.target.value }))}
            className="rounded-full"
          />
        </div>

        <div className="flex min-w-48 flex-col gap-0 px-1">
          {!hideTopBar && <span className="text-xs">Type</span>}
          <NativeSelect
            aria-label="Type"
            defaultValue={PROPERTY_TYPES[0]}
            onChange={(e) => setValues((s) => ({ ...s, type: e.target.value }))}
            className="rounded-full"
          >
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </NativeSelect>
        </div>

        <Button type="submit" className="rounded-full ml-auto">
          <Search size={16} />
        </Button>
      </form>
    </div>
  );
}
