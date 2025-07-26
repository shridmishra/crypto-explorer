import { useContext, useState } from "react";
import { CoinContext } from "../context/coinContext";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const context = useContext(CoinContext);
  const [isOpen, setIsOpen] = useState(false); 

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
    <div className="fixed w-full border-b-2 border-white/10 bg-transparent z-49 px-4 py-3 md:px-10 md:py-5 flex items-center justify-between backdrop-blur-2xl ">
      {/* Logo */}
      <Link to={"/"} className="text-white text-xl md:text-3xl font-bold tracking-tight">
        <span className="text-indigo-500">Crypto</span>{" "}
        <span className="text-white">Explorer</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 text-white font-light text-lg">
        <Link to={"/"} className="hover:text-gray-400 transition">Home</Link>
        <Link to={"/"} className="hover:text-gray-400 transition">Features</Link>
        <Link to={"/"} className="hover:text-gray-400 transition">Blog</Link>
      </ul>

      {/* Right Controls - Desktop */}
      <div className="hidden sm:flex items-center gap-4 md:gap-6">
        <Select onValueChange={currencyHandler}>
          <SelectTrigger className="w-[100px] md:w-[180px] backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white [&>span]:text-white">
            <SelectValue placeholder="USD - $" />
          </SelectTrigger>
          <SelectContent className="bg-white/10 backdrop-blur-lg text-white border-white/20">
            <SelectItem value="usd">USD - $</SelectItem>
            <SelectItem value="eur">EUR - €</SelectItem>
            <SelectItem value="inr">INR - ₹</SelectItem>
          </SelectContent>
        </Select>

        <button className="text-nowrap px-3 py-1 md:px-5 md:py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200 shadow-md font-medium">
          Sign Up
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white z-50 relative"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X size={28} className="mt-2" /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
          <div className="absolute top-full left-0 right-0 mx-3 mt-3 bg-indigo-950  border border-white/30 text-white rounded-3xl flex flex-col space-y-8 py-8 px-6 z-40 shadow-2xl shadow-black/60 animate-in slide-in-from-top-4 fade-in duration-300 items-center">
          <ul className="flex flex-col gap-4 text-center text-lg font-light">
            <li onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition cursor-pointer">
              <Link to={"/"}>Features</Link>
            </li>
            <li onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition cursor-pointer">
              <Link to={"/"}>Blog</Link>
            </li>
          </ul>

          <Select onValueChange={currencyHandler}>
            <SelectTrigger className="w-[180px] backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white [&>span]:text-white">
              <SelectValue placeholder="Select Currency" />
            </SelectTrigger>
            <SelectContent className="bg-white/10 backdrop-blur-lg z-50 text-white border-white/20">
              <SelectItem value="usd">USD - $</SelectItem>
              <SelectItem value="eur">EUR - €</SelectItem>
              <SelectItem value="inr">INR - ₹</SelectItem>
            </SelectContent>
          </Select>

          <button className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200 shadow-md font-medium">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;