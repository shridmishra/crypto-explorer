import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { type HistoricalData } from "@/types";

interface LineChartProps {
  historicalData: HistoricalData;
}

const LineChart = ({ historicalData }: LineChartProps) => {
  const [data, setData] = useState<(string | number)[][]>([["Date", "Price"]]);

  useEffect(() => {
    if (!historicalData?.prices || historicalData.prices.length === 0) return;

    const formatted = historicalData.prices.map(([timestamp, price]) => [
      new Date(timestamp).toLocaleDateString().slice(0, -5),
      parseFloat(price.toFixed(2)),
    ]);

    setData([["Date", "Price"], ...formatted]);
  }, [historicalData]);

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4 text-white">Price Trend (Last 10 Days)</h2>
      <Chart
        chartType="LineChart"
        data={data}
        height="400px"
        legendToggle={true}
        options={{
          hAxis: { title: "Date" },
          vAxis: { title: "Price" },
          curveType: "function",
          colors: ["#00ffcc"],
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
};

export default LineChart;
