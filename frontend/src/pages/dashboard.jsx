//TODO: Fnish 'Filter Expenses' feature and implement 'edit' and 'delete features'

import SummaryCards from "../components/SummaryCards"
import Charts from "../components/Charts"
import RecentExpenses from "../components/RecentExpenses"
import QuickActions from "../components/QuickActions"
import AddIncomeInput from "../components/AddIncomeInput"
import AddExpenseInput from "../components/AddExpenseInput"
import FilterWordInput from "../components/FilterWordInput"
import { useState } from "react"

function Dashboard() {

    const [income, setIncome] = useState(0)
    const [isIncomeInputVisible, setIsIncomeInputVisible] = useState(false)
    const [input, setInput] = useState('')
    const [expense, setExpense] = useState(0)
    const [isExpenseInputVisible, setIsExpenseInputVisible] = useState(false)
    const [expenseInput, setExpenseInput] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [expenseDetails, setExpenseDetails] = useState([])
    const [isFilterInputVisible, setIsFilterInputVisible] = useState(false)
    const [filterWordInput, setFilterWordInput] = useState('')
    //const [filtredExpenses, setFiltredExpenses] = useState()

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

    const handleExpenseDetails = (amount, categ, dat, descrip) => {
        setExpenseDetails([{
            id: Date.now(),
            amount: amount,
            category: categ,
            date: dat,
            description: descrip
        }, ...expenseDetails])
        console.log(expenseDetails)
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