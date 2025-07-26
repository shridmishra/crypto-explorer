import { useState, useEffect, type ReactNode } from "react";
import { CoinContext } from "./coinContext";
import type { Coin, Currency } from "../types"; 

interface Props {
  children: ReactNode;
}

const CoinContextProvider = ({ children }: Props) => {
  const [allCoin, setAllCoin] = useState<Coin[]>([]);
  const [currency, setCurrency] = useState<Currency>({
    name: "usd",
    symbol: "$",
  });


  useEffect(() => {
    const fetchAllCoin = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "x-cg-demo-api-key":import.meta.env.VITE_COINGECKO_API_KEY,
            },
          }
        );
        const data = await res.json();
        setAllCoin(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAllCoin();
  }, [currency]);

  return (
    <CoinContext.Provider value={{ allCoin, currency, setCurrency }}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
