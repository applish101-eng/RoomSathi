import Search from "@/components/search/Search";
export default function Hero() {
  return (
    <section className="flex flex-col relative px-8 py-6 bg-slate-100 ">
      <img
        src="/brand/heroimg.png"
        alt=""
        className="absolute right-10 top-38 -translate-y-1/2 w-100 hidden lg:block"
      />
      <div className="relative z-10">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-ink mb-4 max-w-2xl">
          Find your perfect stay in Nepal
        </h1>
        <p className="text-muted  mb-3 text-lg">
          Rooms, apartments, and homes for short stays or long-term rental
          across Nepal
        </p>
        </div>
        <Search />
      </div>
    </section>
  );
}
