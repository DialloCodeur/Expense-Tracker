import { useContext, useState } from "react"
import { ExpenseContext } from "../../store/ExpenseContext"
import axios from "axios";

function Update_Expense() {
    const { expenseToUpdate } = useContext(ExpenseContext);
    //console.log(expenseToUpdate.id)
    const formatedDate = new Date(expenseToUpdate.date).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })
    const [amount, setAmount] = useState(expenseToUpdate.amount);
    const [category, setCategory] = useState(expenseToUpdate.category);
    const [date, setDate] = useState(formatedDate);
    const [description, setDescription] = useState(expenseToUpdate.description);
    const token = localStorage.getItem("token");
    const getUpdatedExpense = async () => {
        try {
            const response = await axios.patch(`/api/expenses/${expenseToUpdate.id}`, {
                amount,
                category,
                date,
                description
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            //TODO: Uderstand why newCategory, newDate and newDescription in AddExpenseInput component are underlined by red line; Search how to get the update function (onExpenseDetailsChange) to update the interface after sumbmitting the form
            const { amount, category, date, description } = response.data;
            console.log(amount, category, date, description)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                    <form className="space-y-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Amount
                            </label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Category
                            </label>
                            <input
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Date
                            </label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Description
                            </label>
                            <input
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition duration-200 mt-6"
                            onClick={getUpdatedExpense}
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Update_Expense