import { useState } from "react"

function FilterWordInput({ filterWordInput, onFilterWordInputChange, onFilterExpenses, onClearFilter }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await onFilterExpenses(filterWordInput);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-200 p-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Filter expenses</h3>
                    <p className="text-sm text-gray-500">Search by category or description.</p>
                </div>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row sm:items-center" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={filterWordInput}
                    placeholder="Search expenses (ex: food, transport)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    onChange={(e) => onFilterWordInputChange(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition duration-200"
                >
                    {isLoading ? "Filtering..." : "Apply"}
                </button>
                {onClearFilter && (
                    <button
                        type="button"
                        className="w-full sm:w-auto px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition duration-200"
                        onClick={onClearFilter}
                    >
                        Clear
                    </button>
                )}
            </form>
        </div>
    )
}

export default FilterWordInput