const totalIncome = 18000;
const totalExpenses = 995;
const totalBalance = totalIncome - totalExpenses;

export const user = {
  name: "Meklit Sisay",
  email: "meklit@example.com",

  dashboardStats: [
    {
      id: 1,
      title: "Total Balance",
      value: `${totalBalance.toLocaleString()} ETB`,
      icon: "BanknotesIcon",
      color: "bg-green-100",
      valueColor: "text-gray-800",
      iconColor: "text-green-500",
    },
    {
      id: 2,
      title: "Total Income",
      value: `+${totalIncome.toLocaleString()} ETB`,
      icon: "ArrowTrendingUpIcon",
      color: "bg-green-100",
      valueColor: "text-gray-800",
      iconColor: "text-green-600",
    },
    {
      id: 3,
      title: "Total Expenses",
      value: `-${totalExpenses.toLocaleString()} ETB`,
      icon: "ArrowTrendingDownIcon",
      color: "bg-red-100",
      valueColor: "text-red-500",
      iconColor: "text-red-500",
    },
    {
      id: 4,
      title: "Savings Goal",
      value: "75%",
      icon: "ChartBarIcon",
      color: "bg-purple-100",
      valueColor: "text-purple-600",
      iconColor: "text-purple-500",
    },
  ],
};