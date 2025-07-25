/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState, useEffect } from "react";
import { CoinContext } from "../context/coinContext";
import type { Coin } from "../types";

const Home = () => {
  const context = useContext(CoinContext);
  if (!context) return null;

  const { allCoin, currency } = context;
  const [displayCoin, setDisplayCoin] = useState<Coin[]>([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="flex flex-col items-center mt-16 text-white pb-[100px] px-6">
    <div className="flex flex-col items-center justify-center max-w-xl text-center gap-10">
  {/* Heading */}
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white tracking-tight">Largest<br />
    <span className="text-indigo-500">Crypto</span> {""}
     Explorer
  </h1>

  {/* Description */}
  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
    Welcome to the world's largest cryptocurrency explorer. <br />
    <span className="text-white/80">Sign up to explore more about cryptos.</span>
  </p>

  {/* Search Form */}
  <form className="flex flex-col sm:flex-row items-stretch gap-3 bg-white/5 backdrop-blur-xl px-4 py-4 rounded-xl w-full max-w-md border border-white/10 shadow-2xl">
    <input
      type="text"
      placeholder="Search Crypto..."
      className="flex-1 px-4 py-2 rounded-md text-white bg-transparent placeholder-white/70 border border-white/10 focus:ring-2 focus:ring-indigo-600 outline-none transition"
    />
    <button
      type="submit"
      className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition font-semibold shadow-lg"
    >
      Search
    </button>
  </form>
</div>


      <div className="w-full max-w-3xl mx-auto mt-16 bg-gradient-to-r from-[rgba(84,3,255,0.15)] to-[rgba(105,2,153,0.15)] rounded-lg overflow-hidden">
        <div className="grid grid-cols-12 p-4 items-center border-b-2 border-white/20 text-white text-sm font-semibold">
          <p className="col-span-1">#</p>
          <p className="col-span-4">Coins</p>
          <p className="col-span-2">Price</p>
          <p className="col-span-2 text-center">24H Change</p>
          <p className="col-span-3 text-right">Market Cap</p>
        </div>

        {displayCoin.slice(0, 10).map((item,) => (
          <div
            className="grid grid-cols-12 p-4 items-center border-b border-white/10 text-white text-sm"
            key={item.id}
          >
            <p className="col-span-1">{item.market_cap_rank}</p>

            <div className="col-span-4 flex items-center gap-2">
              <img src={item.image} alt={item.name} className="w-6 h-6" />
              <p>{item.name} <span className="uppercase text-gray-400">({item.symbol})</span></p>
            </div>

            <p className="col-span-2">{currency.symbol}{item.current_price.toLocaleString()}</p>

            <p
              className={`col-span-2 text-center ${item.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"
                }`}
            >
              {item.price_change_percentage_24h.toFixed(2)}%
            </p>

            <p className="col-span-3 text-right">
              {currency.symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
