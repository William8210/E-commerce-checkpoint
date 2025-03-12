import Link from "next/link";

function Home() {
  return (
    <section className="container mx-auto p-4 grid h-[80vh] place-items-center">
      <div className="text-center">
        <h1 className="text-6xl text-gray-500 font-stretch-semi-condensed ">
          <span className="text-amber-500 text-mono font-light text-7xl m-2">
            Gorgeous
          </span>
          Lady's Wears Available 24/7
        </h1>
        <p className="text-2xl m-3 text-slate-500 font-medium">
          Very affordable and of great quality, what are you waiting for?
        </p>
        <Link href={"/marketplace"}>
          <button className="bg-cyan-400 text-white font-semibold px-7 py-2 rounded-xl w-[40%] hover:shadow-xl animate-pulse">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
