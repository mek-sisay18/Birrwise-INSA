import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Expense from "./pages/Expense"
import DashboardPage from "./pages/Dashboard"
import Income from "./pages/Income";

function App() {


  return (
    <Router>
      <div className="flex">
         <main className="flex-1 p-0">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/income" element={<Income/>}/>
          </Routes>
         </main>
      </div>


    </Router>
  )
}

export default App
