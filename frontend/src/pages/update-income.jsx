import { useContext, useState } from "react"
import { IncomeContext } from "../../store/IncomeContext"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update_Income() {
    const { income } = useContext(IncomeContext);
    const [amount, setAmount] = useState(income ?? "");
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem("token")
    const navigate = useNavigate();

    const handleUpdatedIncome = async (e) => {
        e.preventDefault();
        const numericAmount = Number(amount);
        if (Number.isNaN(numericAmount)) {
            console.log("Income amount must be a number");
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.patch("/api/income", {
                amount: numericAmount
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log("Response_update_income: ", response.data);
            navigate("/dashboard");
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
                            disabled={isLoading}
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