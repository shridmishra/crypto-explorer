import { useContext } from 'react';
import { CoinContext } from '../context/coinContext';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const Navbar = () => {

    const context = useContext(CoinContext);
    if (!context) return null;

    const { setCurrency } = context;

    const currencyHandler = (value: string) => {
        switch (value) {
            case "usd":
                setCurrency({ name: "usd", symbol: "$" });
                break;
            case "eur":
                setCurrency({ name: "eur", symbol: "€" });
                break;
            case "inr":
                setCurrency({ name: "inr", symbol: "₹" });
                break;
            default:
                setCurrency({ name: "usd", symbol: "$" });
                break;
        }
    };

    return (
        <div className="flex items-center justify-between px-10 py-5 border-b-2 border-white/10 bg-transparent ">
            <div className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
                <span className="text-indigo-500">Crypto</span>{" "}
                <span className="text-white">Explorer</span>
            </div>

            {/* Navigation Links */}
            <ul className="flex gap-8 text-white font-light cursor-pointer text-lg">
                <li className="hover:text-gray-400 transition">Home</li>
                <li className="hover:text-gray-400 transition">Features</li>
                <li className="hover:text-gray-400 transition">Pricing</li>
                <li className="hover:text-gray-400 transition">Blog</li>
            </ul>

            {/* Right Controls */}
            <div className="flex items-center gap-4 sm:gap-6">
                {/* Currency Selector */}

                <Select onValueChange={currencyHandler}>
                    <SelectTrigger
                        className="w-[180px] backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white [&>span]:text-white ">
                        <SelectValue placeholder="Select Currency" />
                    </SelectTrigger>

                    <SelectContent className="bg-white/10  backdrop-blur-lg text-white border-white/20">
                        <SelectItem value="usd">USD - $</SelectItem>
                        <SelectItem value="eur">EUR - €</SelectItem>
                        <SelectItem value="inr">INR - ₹</SelectItem>
                    </SelectContent>
                </Select>


                {/* Sign Up Button */}
                <button className="flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200 shadow-md font-medium">
                    Sign Up
                </button>
            </div>

        </div>
    );
};

export default Navbar;
