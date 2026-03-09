function AddExpenseInput({ expenseInput, onExpenseInputChange, onExpenseChange, category, onCategoryChange, date, onDateChange, description, onDescriptionChange, onExpenseDetailsChange }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        const value = parseFloat(expenseInput) || 0;
        onExpenseChange(value)
        onExpenseDetailsChange(expenseInput, category, date, description)
    }
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Amount
                            </label>
                            <input
                                type="number"
                                value={expenseInput}
                                placeholder="2000"
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                onChange={(e) => onExpenseInputChange(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Category
                            </label>
                            <input
                                type="text"
                                value={category}
                                placeholder="Food"
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                onChange={(e) => onCategoryChange(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Date
                            </label>
                            <input
                                type="date"
                                value={date}
                                placeholder="04/03/2026"
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                onChange={(e) => onDateChange(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Description
                            </label>
                            <input
                                type="text"
                                value={description}
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                onChange={(e) => onDescriptionChange(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition duration-200 mt-6"
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddExpenseInput