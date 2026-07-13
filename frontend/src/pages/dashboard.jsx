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
import { IncomeContext } from "../../store/IncomeContext"
function Dashboard() {
    const [isExpenseInputVisible, setIsExpenseInputVisible] = useState(false)
    const [expenseInput, setExpenseInput] = useState('')
    const [isFilterInputVisible, setIsFilterInputVisible] = useState(false)
    const [filterWordInput, setFilterWordInput] = useState('')
    const [allExpenseDetails, setAllExpenseDetails] = useState([])
    const token = localStorage.getItem("token");
    const { income, setIncome, isIncomeInputVisible, setIsIncomeInputVisible, incomeInput, setIncomeInput, handleIncome } = useContext(IncomeContext)
    const { expense, setExpense, expenseDetails, setExpenseDetails, category, setCategory, date, setDate, description, setDescription, handleExpenseDetails } = useContext(ExpenseContext)
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
                    /*const userExpenses = response.data;
                    console.log(userExpenses)*/
                    const details = response.data.map(exp => ({
                        id: exp._id,
                        amount: exp.amount,
                        category: exp.category,
                        date: exp.date,
                        description: exp.description
                    }));
                    setAllExpenseDetails(details);
                    setExpenseDetails(details);
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

    useEffect(() => {
        try {
            async function loadUserIncome() {
                const response = await axios.get("/api/income", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!ignore) {
                    const userIncome = response.data;
                    console.log("Response_dashboard_loadUserIncome: ", userIncome);
                    userIncome.forEach((income) => income.amount && setIncome(income.amount));
                }
            }

            let ignore = false;
            loadUserIncome();
            return () => {
                ignore = true;
            }
        } catch (error) {
            console.log(error)
        }
    }, [token, setIncome]);

    const handleIncomeInputVisibility = (isVisible) => {
        setIsIncomeInputVisible(isVisible)
    }

    const handleIncomeInput = (inputValue) => {
        setIncomeInput(inputValue)
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

    const handleFiltredExpenses = async (query) => {
        const normalizedQuery = query?.trim().toLowerCase() || "";
        const filteredDetails = normalizedQuery
            ? allExpenseDetails.filter((expense) =>
                expense.category.toLowerCase().includes(normalizedQuery) ||
                expense.description.toLowerCase().includes(normalizedQuery)
            )
            : allExpenseDetails;

        setExpenseDetails(filteredDetails);
    }

    const handleClearFilter = () => {
        setExpenseDetails(allExpenseDetails);
        setFilterWordInput("");
    }

    const handleFilterInputVisibility = (isVisible) => {
        setIsFilterInputVisible(isVisible);

        if (!isVisible) {
            handleClearFilter();
        }
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
                if (expense.id != id) {
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
                    incomeInput={incomeInput}
                    onIncomeInputChange={handleIncomeInput}
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
            {isFilterInputVisible && (
                <FilterWordInput
                    filterWordInput={filterWordInput}
                    onFilterWordInputChange={handleFilterWordInput}
                    onFilterExpenses={handleFiltredExpenses}
                    onClearFilter={handleClearFilter}
                />
            )}
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
                onFilterInputVisibilityChange={handleFilterInputVisibility}
            />
        </main>
    )
}

export default Dashboard