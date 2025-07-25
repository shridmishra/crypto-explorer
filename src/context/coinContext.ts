import { createContext } from "react";
import type { CoinContextType } from "../types";

export const CoinContext = createContext<CoinContextType | null>(null);
