import { Star, Heart } from "lucide-react";

interface Listing {
  id: number;
  type: string;
  location: string;
  price: string;
  img: string;
  rating: number;
}

interface ListingCardProps {
  listing: Listing;
}

const PopularListing = ({ listing }: ListingCardProps) => {
  return (
    <div className="group cursor-pointer mt-3 w-full">
      <div className="relative overflow-hidden rounded-xl">
        <img className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" src={listing.img} />
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 rounded-full px-2 py-0.5 text-xs font-semibold text-ink shadow-sm">
          <Star className="w-3 h-3 fill-primary text-primary" />
          {listing.rating}
        </div>
        <button className="absolute top-3 right-3 p-1.5 bg-white/90 rounded-full shadow-sm hover:bg-white transition">
          <Heart className="w-4 h-4 text-ink" />
        </button>
      </div>
      <div className="mt-2 px-1">
        <h3 className="text-sm font-semibold text-ink truncate">{listing.type} in {listing.location}</h3>
        <p className="text-sm text-muted mt-0.5">NRS. {listing.price}/month</p>
      </div>
    </div>
  );
};

export default PopularListing;
