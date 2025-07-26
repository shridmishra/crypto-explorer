import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Coin from "./pages/Coin"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div className="app">

      <div className="">
        <Navbar />
        <div className="pt-32 px-6 md:px-16 lg:px-24 xl:px-32">
           <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>
        <Footer />
        </div>
       
      </div>

    </div>
  )
}

export default App