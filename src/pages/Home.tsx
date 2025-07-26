import { useContext, useState, useEffect } from "react";
import { CoinContext } from "../context/coinContext";
import type { Coin } from "../types";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const context = useContext(CoinContext);

  const [input, setInput] = useState<string>("");
  const [displayCoin, setDisplayCoin] = useState<Coin[]>([]);

  if (!context) return null;

  const { allCoin, currency } = context;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if(e.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = async (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
   const coins =  await allCoin.filter((item)=>{
     return item.name.toLowerCase().includes( input.toLowerCase())
    })
    setDisplayCoin(coins);
  }

  return (
    <div className="flex flex-col items-center  text-white pb-[100px]">
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
        <form className="flex flex-col sm:flex-row items-stretch gap-6 bg-white/5 backdrop-blur-xl px-4 py-4 rounded-xl w-full max-w-md border border-white/10 shadow-2xl" onSubmit={searchHandler} >
        <div className=" border border-white/10 focus:ring-2 focus:ring-indigo-600 flex items-center justify-center px-2 rounded-2xl">
          <Search size={20} className=" text-white/50"/>
          <input
            type="text"
            value={input}
            list="coin-list"
            placeholder="Search Crypto..."
            className="flex-1 px-4 py-2 rounded-md text-white bg-transparent placeholder-white/70 outline-none transition"
            onChange={inputHandler}
            required
          />
          <datalist id="coin-list">{allCoin.map((item ,index)=>(<option value={item.name} key={index}/>))}</datalist>
        </div>
        
          <button
            type="submit"
            className="bg-indigo-700 text-white px-4 py-2  rounded-md hover:bg-indigo-800 transition font-semibold shadow-lg"
          >
            Search
          </button>
        </form>
      </div>


      <div className="w-full max-w-3xl mx-auto mt-16 bg-gradient-to-r from-[rgba(84,3,255,0.15)] to-[rgba(105,2,153,0.15)] rounded-lg overflow-hidden">
        <div className="grid grid-cols-10 md:grid-cols-12 p-4 items-center border-b-2 border-white/20 text-white text-sm font-semibold">
          <p className="col-span-1">#</p>
          <p className="col-span-4">Coins</p>
          <p className="col-span-2">Price</p>
          <p className="col-span-2 text-center">24H Change</p>
          <p className="hidden md:block col-span-3 text-right ">Market Cap</p>
        </div>

        {displayCoin.slice(0, 10).map((item,) => (
          <Link to={`/coin/${item.id}`}
            className="grid grid-cols-9 md:grid-cols-12 p-4 items-center border-b border-white/10 text-white text-sm"
            key={item.id}
          >
            <p className="col-span-1">{item.market_cap_rank}</p>

            <div className="col-span-4 flex items-center gap-2">
              <img src={item.image} alt={item.name} className="w-6 h-6" />
              <p>{item.name} <span className="uppercase text-gray-400 hidden md:block">({item.symbol})</span></p>
            </div>

            <p className="col-span-2">{currency.symbol}{item.current_price.toLocaleString()}</p>

            <p
              className={`col-span-2 text-center ${item.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"
                }`}
            >
              {item.price_change_percentage_24h.toFixed(2)}%
            </p>

            <p className="col-span-3 text-right hidden md:block">
              {currency.symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
