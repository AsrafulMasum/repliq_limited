import { useEffect, useState } from "react";
import { BarChart, Bar, Tooltip, XAxis, PieChart, Pie, Cell } from "recharts";

// Sample data for the BarChart
const data = [
  {
    name: "Products",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Customers",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Orders",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Checkout",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Expenses",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sales",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

// Sample data for the PieChart
const pieData = [
  { name: "Products", value: 1400 },
  { name: "Customers", value: 760 },
  { name: "Orders", value: 270 },
  { name: "Checkout", value: 3200 }
];

// Colors for the PieChart slices
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#E86524"];

// Customized label renderer in JavaScript
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Chart() {
  const [isPC, setIsPC] = useState(window.innerWidth > 1440)

  // Handling media queries
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1440px)");
  
    // Handler for media query change
    const handleMediaQueryChange = (e) => {
      setIsPC(e.matches);
    };
  
    // Listen for changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);
  
    // Initial check
    setIsPC(mediaQuery.matches);
  
    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <BarChart width={isPC ? 700 : 400} height={400} data={data} barSize={29}>
        <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 30 }} />
        <Bar dataKey="uv" fill="#0088FE" />
        <Tooltip />
      </BarChart>
      <PieChart width={400} height={400}>
      <Pie
        data={pieData}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={160}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    </div>
  );
}

export default Chart;
