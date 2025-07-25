// types.ts

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number; 
  price_change_percentage_24h: number; 
}


export interface Currency {
  name: string;
  symbol: string;
}

export interface CoinContextType {
  allCoin: Coin[];
  currency: Currency;
  setCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}
