import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  ArrowTrendingDownIcon,
  Cog6ToothIcon,
  WalletIcon,
  ArrowTrendingUpIcon,
  ChartPieIcon,
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: HomeIcon, path: "/" },
    { name: "Expenses", icon: ArrowTrendingDownIcon, path: "/expense" },
    { name: "Incomes", icon: ArrowTrendingUpIcon, path: "/income" },
    { name: "Transaction", icon: WalletIcon, path: "/transaction" },
    { name: "Analytics", icon: ChartPieIcon, path: "/analytics" },
    { name: "Setting", icon: Cog6ToothIcon, path: "/settings" },
  ];

  return (
    <div
      className={`bg-white shadow-md h-screen sticky top-0 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-20"
      } flex flex-col`}
    >
      <button
        className="p-4 hover:bg-gray-100 focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Bars3Icon className="w-6 h-6 text-green-900" />
        <span className="text-green-900 font-bold text-md">BirrWise</span>
      </button>

      <nav className="flex flex-col mt-0 space-y-0">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center p-4 rounded-md transition-colors ${
                isActive
                  ? "bg-green-700 text-white"
                  : "text-green-900 hover:bg-green-700 hover:text-white"
              }`}
            >
              <item.icon className="w-6 h-6 text-current" />
              {isExpanded && (
                <span className="ml-4 text-current font-medium">
                  {item.name}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto mb-4">
        <Link
          to="/logout"
          className="flex items-center p-4 rounded-md text-red-600 hover:bg-red-100 transition-colors"
        >
          <ArrowRightStartOnRectangleIcon className="w-6 h-6" />
          {isExpanded && <span className="ml-4 font-medium">Logout</span>}
        </Link>
      </div>
    </div>
  );
}
