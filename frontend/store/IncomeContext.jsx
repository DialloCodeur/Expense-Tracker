import { createContext } from "react";

export const IncomeContext = createContext({
    income: 0,
    isIncomeInputVisible: false,
    incomeInput: "",
    handleIncome: () => { }
})