//TODO: Add delete, filter and edit features (Icons and feautres). Then add income feature and charts (expenses per category, expenses evolution and Incomes vs Expenses)

import SummaryCards from "../components/SummaryCards"
import Charts from "../components/Charts"
import RecentExpenses from "../components/RecentExpenses"
import QuickActions from "../components/QuickActions"
import AddIncomeInput from "../components/AddIncomeInput"
import AddExpenseInput from "../components/AddExpenseInput"
import FilterWordInput from "../components/FilterWordInput"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { ExpenseContext } from "../../store/ExpenseContext"
//import { useNavigate } from "react-router-dom"
//TODO: Fetch user expenses as soon as he logged in
function Dashboard() {

    const [income, setIncome] = useState(0)
    const [isIncomeInputVisible, setIsIncomeInputVisible] = useState(false)
    const [input, setInput] = useState('')
    //const [expense, setExpense] = useState(0)
    const [isExpenseInputVisible, setIsExpenseInputVisible] = useState(false)
    const [expenseInput, setExpenseInput] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    //const [expenseDetails, setExpenseDetails] = useState([])
    const [isFilterInputVisible, setIsFilterInputVisible] = useState(false)
    const [filterWordInput, setFilterWordInput] = useState('')
    //const [filtredExpenses, setFiltredExpenses] = useState();
    const token = localStorage.getItem("token");
    const { expense, setExpense, expenseDetails, setExpenseDetails } = useContext(ExpenseContext)
    useEffect(() => {
        let ignore = false;
        async function loadUserExpenses() {
            try {
                const response = await axios.get("/api/expenses", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (!ignore) {
                    //console.log(response.data);
                    const userExpenses = response.data;
                    console.log(userExpenses)
                    setExpenseDetails(response.data.map(exp => ({
                        id: exp._id,
                        amount: exp.amount,
                        category: exp.category,
                        date: exp.date,
                        description: exp.description
                    })));
                    const amountsArray = [];
                    for (let expense of response.data) {
                        amountsArray.push(expense.amount)
                    }
                    setExpense(amountsArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
                }
            } catch (error) {
                console.log(error.message);
            }
        }

        loadUserExpenses();
        return () => {
            ignore = true;
        }
    }, [token, setExpense, setExpenseDetails]);

    const handleIncome = (updatedIncome) => {
        setIncome(prev => prev + updatedIncome);
        setIsIncomeInputVisible(false);
        setInput('');
    }

    const handleIncomeInputVisibility = (isVisible) => {
        setIsIncomeInputVisible(isVisible)
    }

    const handleInput = (inputValue) => {
        setInput(inputValue)
    }

    const handleExpense = (updatedExpense) => {
        setExpense(prev => prev + updatedExpense)
        setIsExpenseInputVisible(false)
        setExpenseInput('')
    }

    const handleExpenseInputVisibility = (isVisible) => {
        setIsExpenseInputVisible(isVisible)
    }

    const handleExpenseInput = (inputValue) => {
        setExpenseInput(inputValue)
    }

    const handleCategory = (inputedcategory) => {
        setCategory(inputedcategory)
    }

    const handleDate = (inputedDate) => {
        setDate(inputedDate)
    }

    const handleDescription = (inputedDescription) => {
        setDescription(inputedDescription)
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
        setCategory('')
        setDate('')
        setDescription('')
    }

    const handleFiltredExpenses = (category) => {
        setExpenseDetails(expenseDetails.filter((expense) => expense.category.toLowerCase() == category.toLowerCase()))
        setIsFilterInputVisible(false)
        setFilterWordInput('')
    }

    const handleFilterInputVisibilty = (isVisible) => {
        setIsFilterInputVisible(isVisible)
    }

    const handleFilterWordInput = (inputValue) => {
        setFilterWordInput(inputValue)
    }

    const handleExpenseDeletion = async (id) => {
        try {
            const response = await axios.delete(`/api/expenses/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(id)
            if (response.status != 204) {
                return;
            }
            setExpenseDetails(expenseDetails.filter((expense) => expense.id != id))
            const amountsArray = [];
            for (let expense of expenseDetails) {
                if(expense.id != id){
                    amountsArray.push(expense.amount)
                }
            }
            const totalOfAmounts = amountsArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            //console.log(totalOfAmounts)
            setExpense(totalOfAmounts);
        } catch (error) {
            console.log(error.message);
        }
    }


    if (isIncomeInputVisible) {
        return (
            <main className="p-6 space-y-8">
                <AddIncomeInput
                    input={input}
                    onInputChange={handleInput}
                    onIncomeChange={handleIncome}
                />
            </main>
        )
    } else if (isExpenseInputVisible) {
        return (
            <main className="p-6 space-y-8">
                <AddExpenseInput
                    expenseInput={expenseInput}
                    onExpenseInputChange={handleExpenseInput}
                    onExpenseChange={handleExpense}
                    category={category}
                    onCategoryChange={handleCategory}
                    date={date}
                    onDateChange={handleDate}
                    description={description}
                    onDescriptionChange={handleDescription}
                    onExpenseDetailsChange={handleExpenseDetails}
                />
            </main>
        )
    }
    return (
        <main className="p-6 space-y-8">
            <SummaryCards
                income={income}
                expense={expense}
            />
            <Charts />
            <RecentExpenses
                expenseDetails={expenseDetails}
                onExpenseDeletionChange={handleExpenseDeletion}
            />
            <QuickActions
                isIncomeInputVisible={isIncomeInputVisible}
                onIncomeInputVisibilityChange={handleIncomeInputVisibility}
                isExpenseInputVisible={isExpenseInputVisible}
                onExpenseInputVisibilityChange={handleExpenseInputVisibility}
                isFilterInputVisible={isFilterInputVisible}
                onFilterInputVisibiltyChange={handleFilterInputVisibilty}
            />
            {isFilterInputVisible && <FilterWordInput
                filterWordInput={filterWordInput}
                onFilterWordInputChange={handleFilterWordInput}
                onFilterExpenses={handleFiltredExpenses}
            />}
        </main>
    )
}

export default Dashboard