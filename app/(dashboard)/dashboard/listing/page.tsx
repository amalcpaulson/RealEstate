import { ListingTable } from "@/components/dashboard/listing-table";

export default function ListingPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Welcome back to Realtor 👋🏻</h1>
      </div>
      <ListingTable />
    </div>
  );
}
