import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { transactions } from "../data/transaction";

import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  CalendarDaysIcon,
  HashtagIcon,
} from "@heroicons/react/24/outline";
import { income } from "../data/income";

const iconMap: Record<string, React.ElementType> = {
  ArrowTrendingDownIcon,
  CalendarDaysIcon,
  HashtagIcon,
  ArrowTrendingUpIcon,
};

export default function Income() {
  const filteredTransactions = transactions.transactions.filter((t) =>
    [3, 5].includes(t.id)
  );

  return (
    <>
      <div className="flex flex-col min-h-screen bg-amber-50">
        <Header title={"Income Managment "}></Header>
        <div className="flex flex-1">
          <Sidebar></Sidebar>
          <main className="flex-1 p-8 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-green-700 mb-1">
                  Income Tracker
                </h1>
                <p className="text-gray-700 mb-8">Monitor your streams.</p>
              </div>
              <div className="bg-green-900 text-md font-bold text-white rounded-md py-2 px-2">
                <p>+ Add Income</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              {income.incomecate.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div
                    key={item.id}
                    className="flex justify-between items-center w-72 bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition"
                  >
                    <div>
                      <h2 className="text-black text-sm">{item.title}</h2>
                      <p className="text-2xl font-semibold">{item.value} </p>
                    </div>

                    <div className="bg-gray-100 p-3 rounded-xl">
                      {Icon && <Icon className="h-6 w-6 text-gray-700" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white p-6 mt-6 rounded-xl shadow-lg">
              <h2 className="text-lg font-bold mb-4 text-green-700">
                Recent Income
              </h2>
              <div className="flex flex-col divide-y divide-gray-200">
                {filteredTransactions.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between py-4"
                    >
                      <div className="flex items-center gap-3">
                        {Icon && <Icon className="w-6 h-6 text-gray-500" />}
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-800">
                            {item.title}
                          </span>
                          <span className="text-sm text-gray-500">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`font-semibold ${
                          item.value >= 0 ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {item.value >= 0
                          ? `+${item.value} ETB`
                          : `${item.value} ETB`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
