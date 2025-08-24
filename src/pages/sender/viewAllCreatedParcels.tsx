import { ParcelCard } from "@/components/modules/Parcel/ParcelCard";
import { useGetParcelsQuery } from "@/redux/features/Parcel/parcel.api";

export default function ViewAllCreatedParcels  ()  {
  const { data: parcels, isLoading, error } = useGetParcelsQuery();

  if (isLoading) return <div>Loading parcels...</div>;
  if (error) return <div>Error loading parcels</div>;
console.log(parcels)
  return (
    <div>
      <h1>View All Created Parcels</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {parcels?.length ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        parcels.map((parcel: any) => (
          <ParcelCard key={parcel._id} parcel={parcel}></ParcelCard>
        ))
      ) : (
        <div>No parcels found</div>
      )}
      </div>
    </div>
  );
};
