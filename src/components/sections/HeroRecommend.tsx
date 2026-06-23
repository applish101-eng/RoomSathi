import React from "react";
import PopularListing from "./PopularListing";

const popularListings = [
  {
    id: 1,
    type: "Room",
    location: "Patan",
    price: "NRS 2,000",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
    rating: 4.5,
  },
  {
    id: 2,
    type: "Hostel",
    location: "Patan",
    price: "NRS 2,000",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400",
    rating: 4.5,
  },
  {
    id: 3,
    type: "Office",
    location: "Bhaktapur",
    price: "NRS 2,000",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400",
    rating: 4.5,
  },
  {
    id: 4,
    type: "Apartment",
    location: "Kathmandu",
    price: "NRS 2,000",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
    rating: 4.5,
  },
  {
    id: 5,
    type: "House",
    location: "Banepa",
    price: "NRS 2,000",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400",
    rating: 4.5,
  },
];

const HeroRecommend = () => {
  return (
    <section className="section-wrapper">
      <h1 className="head">Popular Stays</h1>{" "}
      <p className="para">Hand-picked homes for your next trip</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-5 lg:gap-6">
        {popularListings.map((listing) => (
          <PopularListing key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
};

export default HeroRecommend;
