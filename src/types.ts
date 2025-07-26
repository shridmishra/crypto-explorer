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

export interface CoinData {
  market_data: string;
  id: string;
  name: string;
  symbol: string;
  image: Image;
  current_price: number;
  market_cap: number;
  market_cap_rank: number; 
  price_change_percentage_24h: number; 
}

export interface Image {
  large: string;
}

export interface HistoricalData {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
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
