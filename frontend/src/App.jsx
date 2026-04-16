//TODO: Finish the static dashboard and add interactivity using react
//TODO: Implemente the add expense future

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet, useNavigate } from "react-router-dom"
import { ExpenseContext } from "../store/ExpenseContext"
import { useState } from "react"
//import { ExpenseContextProvider } from "../store/ExpenseContext"

function App() {

  const [expense, setExpense] = useState(0);
  const [expenseDetails, setExpenseDetails] = useState([]);
  const [expenseToUpdate, setExpenseToUpdate] = useState({})
  const navigate = useNavigate();

  const resetUser = () => {
    localStorage.removeItem("token");
    setExpense(0);
    setExpenseDetails([]);
    navigate("/");
  }

  const getExpenseToUpdate = (id) => {
    setExpenseToUpdate(expenseDetails.find((expense) => expense.id == id));
  }
  return (
    <>
      <ExpenseContext value={{
        expense,
        setExpense,
        expenseDetails,
        setExpenseDetails,
        expenseToUpdate,
        resetUser,
        getExpenseToUpdate
      }}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ExpenseContext>
    </>
  )
}

export default App
