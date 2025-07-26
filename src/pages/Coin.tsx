import { Skeleton } from "@/components/ui/skeleton"
import { CoinContext } from "@/context/coinContext"
import { type CoinData } from "@/types"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Coin = () => {

  const context = useContext(CoinContext)
  const { coinId } = useParams()
  const [coinData, setCoinData] = useState<CoinData>()
  if (!context) return null;
  const { currency } = context;




  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchCoinData = async () => {
      const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-qZr8LFNjHvrsBdo3m8nADPJG' }
      };

      fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
        .then(res => res.json())
        .then(res => setCoinData(res))
        .catch(err => console.error(err));
    }

    fetchCoinData()
  }, [coinId, currency])

  if (coinData) {
    return (
      <div>
        <div>
          <img src={coinData.image.large} />
          <p><b>{coinData.name}({coinData.symbol.toUpperCase()})</b></p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    )
  }

}

export default Coin