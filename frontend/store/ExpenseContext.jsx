//TODO: Implement the global state
import { createContext } from "react";

export const ExpenseContext = createContext({
    expense: 0,
    expenseDetails: [],
    expenseToUpdate: {},
    resetUser: () => { },
    getExpenseToUpdate: () => { }
});
