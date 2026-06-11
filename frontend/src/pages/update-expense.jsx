import { useContext, useState } from "react"
import { ExpenseContext } from "../../store/ExpenseContext"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update_Expense() {
    const { expenseToUpdate } = useContext(ExpenseContext);
    //console.log(expenseToUpdate.id)
    /*const formatedDate = new Date(expenseToUpdate.date).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })*/
    const [amount, setAmount] = useState(expenseToUpdate.amount);
    const [category, setCategory] = useState(expenseToUpdate.category);
    const [date, setDate] = useState(expenseToUpdate.date);
    const [description, setDescription] = useState(expenseToUpdate.description);
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem("token");
    const handleUpdatedExpense = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.patch(`/api/expenses/${expenseToUpdate.id}`, {
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
            //const { _id, amount: updatedAmount, category: updatedCategory, date: updatedDate, description: updatedDescription } = response.data;
            //console.log(_id, updatedAmount, updatedCategory, updatedDate, updatedDescription);
            //handleExpenseDetails(_id, updatedAmount, updatedCategory, updatedDate, updatedDescription);
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    const navigate = useNavigate()
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                    <form className="space-y-5" onSubmit={handleUpdatedExpense}>
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
                            disabled={isLoading}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition duration-200 mt-6"
                        >
                            {isLoading ? "Upadating expense..." : "Update"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Update_Expense