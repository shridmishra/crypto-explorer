import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { CoinContext } from "@/context/coinContext";
import { type CoinData, type HistoricalData } from "@/types";
import LineChart from "../components/LineChart";

const Coin = () => {
  const context = useContext(CoinContext);
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState<CoinData>();
  const [historicalData, setHistoricalData] = useState<HistoricalData>();

  if (!context) return null;
  const { currency } = context;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY,
          },
        });
        const data = await res.json();
        setCoinData(data);
      } catch (err) {
        console.error("Error fetching coin data:", err);
      }
    };

    const fetchHistoricalData = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
          { method: "GET", headers: { accept: "application/json" } }
        );
        const data = await res.json();
        setHistoricalData(data);
      } catch (err) {
        console.error("Error fetching historical data:", err);
      }
    };

    if (coinId) {
      fetchCoinData();
      fetchHistoricalData();
    }
  }, [coinId, currency]);

  if (coinData && historicalData) {
    return (
      <div className="text-white px-4 py-6 max-w-4xl mx-auto">
        {/* Coin Info */}
        <div className="flex items-center gap-4">
          <img src={coinData.image.large} alt={coinData.name} className="w-20 h-20" />
          <div>
            <p className="text-2xl font-bold">
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </p>
            {/* <p className="text-sm text-gray-400">{coinData.market_data.current_price[currency.name]} {currency.name.toUpperCase()}</p> */}
          </div>
        </div>

        {/* Chart */}
        <div className="mt-8">
          <LineChart historicalData={historicalData} />
        </div>
      </div>
    );
  }

  // Loading state
  return (
    <div className="flex flex-col space-y-3 p-6">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default Coin;
