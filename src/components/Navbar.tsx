import logo from '../assets/logo.png';
import arrowIcon from '../assets/arrow_icon.png';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-10 py-5 border-b-2 border-neutral-800 bg-transparent ">
            {/* Logo */}
            <img src={logo} alt="logo" className="w-[max(12vw,120px)]" />

            {/* Navigation Links */}
            <ul className="flex gap-6 text-white font-light cursor-pointer text-lg">
                <li className="hover:text-gray-400 transition">Home</li>
                <li className="hover:text-gray-400 transition">Features</li>
                <li className="hover:text-gray-400 transition">Pricing</li>
                <li className="hover:text-gray-400 transition">Blog</li>
            </ul>

            {/* Right Controls */}
            <div className="flex items-center gap-4">
                {/* Currency Selector */}
                <select
                    name="Currency"
                    className="px-4 py-2 border border-white bg-transparent text-white rounded-md focus:outline-none"
                >
                    <option className="bg-[#09005c]" value="usd">USD</option>
                    <option className="bg-[#09005c]" value="eur">EUR</option>
                    <option className="bg-[#09005c]" value="inr">INR</option>
                </select>

                {/* Sign Up Button */}
                <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition">
                    Sign Up
                    <img src={arrowIcon} alt="arrow" className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
