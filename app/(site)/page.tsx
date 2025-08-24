import { SearchBar } from "@/components/buyer/search-bar";
import { PropertyCard } from "@/components/buyer/property-card";
import { POPULAR_BY_CITY } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/site/Navbar/page";

export default function HomePage() {
  const kochi = POPULAR_BY_CITY.Kochi;
  const pune = POPULAR_BY_CITY.Pune;

  return (
    <div>
      {/* Hero with background (CSS background-image) */}
      <section className="p-1">
        <div
          className="relative h-[300px] sm:h-[300px] md:h-[479px] rounded-2xl bg-center bg-cover"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 rounded-xl bg-black/25" />
          <div className="absolute inset-0 flex items-center justify-between flex-col px-4">
            <Navbar />
            <div className="flex items-center justify-center flex-grow">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Popular sections */}
      <section className="mx-auto w-full max-w-[1120px] px-6 py-18 lg:px-8">
        <h2 className="mb-4 text-xl font-medium flex items-center gap-2">
          Popular Properties in Kochi
          <ChevronRight />
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {kochi.map((p) => (
            <PropertyCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1120px] px-6 pb-18 lg:px-8">
        <h2 className="mb-4 text-xl font-medium flex items-center gap-2">
          Popular Properties in Pune
          <ChevronRight />
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pune.map((p) => (
            <PropertyCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
