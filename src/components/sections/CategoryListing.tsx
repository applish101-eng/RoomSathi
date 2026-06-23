import React from "react";
import PopularListing from "./PopularListing";

const allListings = [
  { id: 1, type: "Room", location: "Thamel, Kathmandu", price: "NRS 1,500", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", rating: 4.8 },
  { id: 2, type: "Room", location: "Lakeside, Pokhara", price: "NRS 2,000", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400", rating: 4.6 },
  { id: 3, type: "Room", location: "New Road, Kathmandu", price: "NRS 1,200", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400", rating: 4.5 },
  { id: 16, type: "Room", location: "Sauraha, Chitwan", price: "NRS 1,800", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400", rating: 4.7 },
  { id: 17, type: "Room", location: "Patan Durbar Square", price: "NRS 1,300", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400", rating: 4.4 },
  { id: 4, type: "Apartment", location: "Baluwatar, Kathmandu", price: "NRS 5,000", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400", rating: 4.9 },
  { id: 5, type: "Apartment", location: "Jhamsikhel, Lalitpur", price: "NRS 4,500", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", rating: 4.7 },
  { id: 6, type: "Apartment", location: "Baneshwor, Kathmandu", price: "NRS 3,500", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", rating: 4.4 },
  { id: 18, type: "Apartment", location: "Gyaneshwor, Kathmandu", price: "NRS 4,000", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", rating: 4.6 },
  { id: 19, type: "Apartment", location: "Pulchowk, Lalitpur", price: "NRS 4,200", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400", rating: 4.5 },
  { id: 7, type: "Hostel", location: "Samakhusi, Kathmandu", price: "NRS 800", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400", rating: 4.3 },
  { id: 8, type: "Hostel", location: "Bagar, Pokhara", price: "NRS 600", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400", rating: 4.2 },
  { id: 9, type: "Hostel", location: "Basantapur, Kathmandu", price: "NRS 700", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400", rating: 4.1 },
  { id: 20, type: "Hostel", location: "Chitwan, Bharatpur", price: "NRS 500", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400", rating: 4.0 },
  { id: 21, type: "Hostel", location: "Phulbari, Pokhara", price: "NRS 650", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", rating: 4.4 },
  { id: 10, type: "House", location: "Budhanilkantha, Kathmandu", price: "NRS 8,000", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", rating: 5.0 },
  { id: 11, type: "House", location: "Sundarijal, Kathmandu", price: "NRS 6,000", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", rating: 4.8 },
  { id: 12, type: "House", location: "Dhulikhel, Kavre", price: "NRS 4,000", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400", rating: 4.6 },
  { id: 22, type: "House", location: "Kapan, Kathmandu", price: "NRS 5,500", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400", rating: 4.7 },
  { id: 23, type: "House", location: "Gaindakot, Nawalpur", price: "NRS 3,500", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400", rating: 4.5 },
  { id: 13, type: "Office", location: "Putalisadak, Kathmandu", price: "NRS 10,000", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400", rating: 4.7 },
  { id: 14, type: "Office", location: "Durbar Marg, Kathmandu", price: "NRS 15,000", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400", rating: 4.9 },
  { id: 15, type: "Office", location: "Naxal, Kathmandu", price: "NRS 12,000", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", rating: 4.5 },
  { id: 24, type: "Office", location: "Jawalakhel, Lalitpur", price: "NRS 11,000", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", rating: 4.6 },
  { id: 25, type: "Office", location: "Chakrapath, Kathmandu", price: "NRS 9,000", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400", rating: 4.3 },
];

const typeLabels: Record<string, string> = {
  Room: "Rooms",
  Apartment: "Apartments",
  Hostel: "Hostels",
  House: "Houses",
  Office: "Offices",
};

const typeDescriptions: Record<string, string> = {
  Room: "Cozy rooms for short or long stays",
  Apartment: "Modern apartments in prime locations",
  Hostel: "Budget-friendly shared spaces",
  House: "Full homes for families and groups",
  Office: "Workspaces and commercial spaces",
};

const CategoryListing = ({ category }: { category: string }) => {
  const filtered = allListings.filter((item) => item.type === category);

  return (
    <section className="section-wrapper">
      <h1 className="head">{typeLabels[category] || category}</h1>
      <p className="para">{typeDescriptions[category] || ""}</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-5 lg:gap-6">
        {filtered.map((listing) => (
          <PopularListing key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
};

export default CategoryListing;
