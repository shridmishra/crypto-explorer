const Home = () => {
  return (
    <div className="flex items-center justify-center mt-16 text-white pb-[100px] px-6">
      <div className="flex flex-col items-center justify-center max-w-xl text-center gap-10">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Largest <br /> Crypto Explorer
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Welcome to the world's largest cryptocurrency marketplace. <br />
          Sign up to explore more about cryptos.
        </p>

        {/* Search Form */}
        <form className="flex flex-col sm:flex-row  gap-4 bg-white px-2 py-2 rounded-lg w-full max-w-md">
          <input
            type="text"
            placeholder="Search Crypto.."
            className="flex-1 px-4 py-2  rounded-md text-black outline-none"
          />
          <button
            type="submit"
            className="bg-[#1a0c7d] text-white px-6 py-2 rounded-md hover:bg-[#0b004e] transition"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
