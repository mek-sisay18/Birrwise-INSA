
import {
  HomeIcon,
  ArrowTrendingDownIcon,
  Cog6ToothIcon,
  WalletIcon,
  ArrowTrendingUpIcon,
  ChartPieIcon,
  CurrencyDollarIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useState } from "react";




export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { name: "BirrWise", icon: CurrencyDollarIcon },
    { name: "Dashboard", icon: HomeIcon },
    { name: "Expenses", icon: ArrowTrendingDownIcon},
    { name: "Incomes", icon: ArrowTrendingUpIcon },
    { name: "Transaction", icon: WalletIcon },
    { name: "Analytics", icon: ChartPieIcon },
    { name: "Setting", icon: Cog6ToothIcon },

  ];

  return(
    <>
        <div
      className={`bg-white shadow-md h-screen sticky top-0 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-20"
      } flex flex-col`}
    >
              <button
        className="p-4 hover:bg-gray-100 focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        < Bars3Icon className="w-6 h-6 text-green-900" />
      </button>
      <nav className="flex flex-col mt-0 space-y-0">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className="flex items-center p-4 hover:bg-green-700 hover:text-white rounded-md transition-colors text-green-900"
          >
            <item.icon className="w-6 h-6 text-green-900 text-current"/>
            {isExpanded && <span className="ml-4 text-green-900 text-current font-medium ">{item.name}</span>}
          </button>
        ))}
      </nav>
        </div>
    </>

  );













}