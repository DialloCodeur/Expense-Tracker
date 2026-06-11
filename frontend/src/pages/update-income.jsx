import { useContext, useState } from "react"
import { IncomeContext } from "../../store/IncomeContext"
import axios from "axios";

function Update_Income() {
    const { income } = useContext(IncomeContext);
    const [amount, setAmount] = useState(income);
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem("token")

    const handleUpdatedIncome = (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = axios.patch("/api/income", {
                amount
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log(response.data);
        } catch (error) {
            console.log(error)

        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                    <form className="flex gap-2" onSubmit={handleUpdatedIncome}>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                        />
                        <button
                            type="submit"
                            disable
                            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition duration-200"
                        >
                            {isLoading ? "Updating income..." : "Update"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Update_Income