import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { user } from "../data/mockUser";
import * as Icons from "@heroicons/react/24/outline";
import { transactions } from "../data/transaction";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      <Header title="Financial Dashboard" />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8 transition-all duration-300">
          <h1 className="text-3xl font-bold text-green-700 mb-1">
            Welcome, {user.name} 👋
          </h1>
          <p className="text-gray-700 mb-8">
            Here’s your current financial summary.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {user.dashboardStats.map((item) => {
              const IconComponent = Icons[item.icon as keyof typeof Icons];
              return (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-6 rounded-2xl const totalBalance = totalIncome - totalExpenses; hover:shadow-xl ${item.color} border border-gray-100`}
                >
                  <div>
                    <p className="text-gray-500 text-sm font-medium">
                      {item.title}
                    </p>
                    <h2
                      className={`text-2xl font-semibold mt-2 ${item.valueColor}`}
                    >
                      {item.value}
                    </h2>
                  </div>
                  <div className="p-3 rounded-full bg-white shadow-inner">
                    {IconComponent && (
                      <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white p-6 mt-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-green-700">
              Recent Transactions
            </h2>
            <div className="flex flex-col divide-y divide-gray-200">
              {transactions.transactions.map((tx) => {
                const IconComponent = Icons[tx.icon as keyof typeof Icons];
                return (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between py-4"
                  >
                    <div className="flex items-center gap-3">
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-gray-500" />
                      )}
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-800">
                          {tx.title}
                        </span>
                        <span className="text-sm text-gray-500">
                          {tx.category}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`font-semibold ${
                        tx.value >= 0 ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {tx.value >= 0 ? `+${tx.value} ETB` : `${tx.value} ETB`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-1 gap-4 p-4 transition-all duration-300">
            <div className=" flex-1 bg-white shadow-lg rounded-2xl p-6">
              <span className="font-md text-md text-green-900 ">
                Quick Actions
              </span>
              <div className="grid grid-cols-2 gap-4 items-center">
                {/* Box 1 */}
                <Link to="/expense">
                  <div className="bg-red-400 p-4 rounded-xl text-center hover:shadow-xl">
                    <Icons.ArrowTrendingDownIcon className="text-white font-bold w-8 h-8 mb-2"></Icons.ArrowTrendingDownIcon>
                    <p className="text-md text-white font-bold">Add Expense</p>
                  </div>
                </Link>

                {/* Box 2 */}
                <Link to="/income">
                  <div className="bg-green-600 p-4 rounded-xl text-center hover:shadow-xl">
                    <Icons.ArrowTrendingUpIcon className="text-white font-bold w-8 h-8 mb-2"></Icons.ArrowTrendingUpIcon>
                    <p className="text-md text-white font-bold">Add Income</p>
                  </div>
                </Link>

                {/* Box 3 */}
                <Link to="/analytics">
                  <div className="bg-white p-4 rounded-xl text-center border border-green-900 hover:shadow-xl ">
                    <Icons.ChartPieIcon className="text-green-900 font-bold w-8 h-8 mb-2"></Icons.ChartPieIcon>
                    <p className="text-md font-bold text-green-900">
                      View Analytics
                    </p>
                  </div>
                </Link>

                {/* Box 4 */}
                <Link to="/transaction">
                  <div className="bg-white p-4 rounded-xl text-center border border-purple-900 hover:shadow-xl">
                    <Icons.ChartBarIcon className="text-purple-900 font-bold w-8 h-8 mb-2"></Icons.ChartBarIcon>
                    <p className="text-md font-bold text-purple-800">
                      Transactions
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className=" flex-1 bg-white shadow-lg rounded-2xl p-6">
              <span className="font-md text-md text-green-900">
                Quick Insights
              </span>
              <div className="justify-between grid grid-cols-2 gap-4 items-center py-2">
                <span className="text-md text-black">
                  Top Spending Category
                </span>
                <div className="bg-purple-900 rounded-lg text-sm text-white font-bold px-2 items-center">
                  <span>Food & Drinking</span>
                </div>
              </div>

              <div className="justify-between grid grid-cols-2 gap-4 items-center py-2">
                <span className="text-md text-black">
                  This month vs last month
                </span>
                <div className="bg-red-700 rounded-lg text-sm text-white font-bold px-2 items-center">
                  <span>+12% expenses</span>
                </div>
              </div>

              <div className="justify-between grid grid-cols-2 gap-4 items-center py-2">
                <span className="text-md text-black">Budget Status</span>
                <div className="bg-green-700 rounded-lg text-sm text-white font-bold px-2 items-center">
                  <span>On track</span>
                </div>
              </div>
            </div>
            <div className=" flex-1 bg-white shadow-lg rounded-2xl p-6">
              <span className="font-md text-md text-green-900">
                Financial Tips
              </span>
              <div className="flex-1 my-2">
                <div className="my-2 mx-2 py-4 px-2 bg-green-100 text-green-900 text-md rounded-lg">
                  <span>
                    {" "}
                    💡Consider reducing dining out expenses by 20% to reach your
                    saving goal faster.
                  </span>
                </div>
                <div className="my-4 mx-2 py-4 px-2 bg-purple-400 text-purple-900 text-md rounded-lg">
                  <span>
                    {" "}
                    🎯You're 500 ETB away from your monthly savings target.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
