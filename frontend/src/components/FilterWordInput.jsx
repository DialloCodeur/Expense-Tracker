import { useState } from "react"
import { useNavigate } from "react-router-dom";

function FilterWordInput({ filterWordInput, onFilterWordInputChange, onFilterExpenses }) {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            onFilterExpenses(filterWordInput);
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                    <form className="flex gap-2" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={filterWordInput}
                            placeholder="Food"
                            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            onChange={(e) => onFilterWordInputChange(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition duration-200"
                        >
                            {isLoading ? "Filtering..." : "Filter"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FilterWordInput