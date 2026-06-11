import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet, useNavigate } from "react-router-dom"
import { ExpenseContext } from "../store/ExpenseContext"
import { IncomeContext } from "../store/IncomeContext"
import { useState } from "react"

function App() {

  const [income, setIncome] = useState(0);
  const [isIncomeInputVisible, setIsIncomeInputVisible] = useState(false);
  const [incomeInput, setIncomeInput] = useState("");
  const [expense, setExpense] = useState(0);
  const [expenseDetails, setExpenseDetails] = useState([]);
  const [expenseToUpdate, setExpenseToUpdate] = useState({});
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("")
  const navigate = useNavigate();

  const handleIncome = (updatedIncome) => {
    setIncome(prev => prev + updatedIncome);
    setIsIncomeInputVisible(false);
    setIncomeInput('');
  }

  const resetUser = () => {
    localStorage.removeItem("token");
    setExpense(0);
    setExpenseDetails([]);
    navigate("/");
  }

  const getExpenseToUpdate = (id) => {
    setExpenseToUpdate(expenseDetails.find((expense) => expense.id == id));
  }

  const handleExpenseDetails = (id, amount, category, date, description) => {
    setExpenseDetails([{
      id: id,
      amount: amount,
      category: category,
      date: date,
      description: description
    }, ...expenseDetails])
    console.log(expenseDetails);
    setCategory("")
    setDate("")
    setDescription("")
  }


  return (
    <>
      <IncomeContext value={{
        income,
        setIncome,
        isIncomeInputVisible,
        setIsIncomeInputVisible,
        incomeInput,
        setIncomeInput,
        handleIncome
      }}>
        <ExpenseContext value={{
          expense,
          setExpense,
          expenseDetails,
          setExpenseDetails,
          expenseToUpdate,
          resetUser,
          getExpenseToUpdate,
          category,
          setCategory,
          date,
          setDate,
          description,
          setDescription,
          handleExpenseDetails
        }}>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </ExpenseContext>
      </IncomeContext>
    </>
  )
}

export default App
