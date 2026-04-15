//TODO: Implement the global state
import { createContext } from "react";

export const ExpenseContext = createContext({
    expense: 0,
    expenseDetails: [],
    resetUser: () => { }
});
/*export const ExpenseContext = createContext({
    expense: 0,
    expenseDetails: [],
    resetUser: () => { }
});

export function ExpenseContextProvider({ children }) {
    const [expense, setExpense] = useState(0);
    const [expenseDetails, setExpenseDetails] = useState([]);
    let navigate = useNavigate();
    const resetUser = () => {
        setExpenseDetails([]);
        setExpense(0);
        //localStorage.removeItem("token");
        navigate("/");
    }

    return <ExpenseContext.Provider value={{
        expense,
        setExpense,
        expenseDetails,
        setExpenseDetails,
        resetUser
    }}>
        {children}
    </ExpenseContext.Provider>
}*/