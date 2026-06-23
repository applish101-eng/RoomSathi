import Navbar from "@/components/navbar/Navbar";
import HeroRecommend from "@/components/sections/HeroRecommend";
import CategoryListing from "@/components/sections/CategoryListing";
import Herohosting from "@/components/sections/Herohosting";
import Footer from "@/components/footer/Footer";

const categories = ["Room", "Apartment", "Hostel", "House", "Office"];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <HeroRecommend />
      {categories.map((cat) => (
        <CategoryListing key={cat} category={cat} />
      ))}
      <Herohosting />
      <Footer />
    </>
  );
}
