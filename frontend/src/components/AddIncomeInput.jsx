function AddIncomeInput({ input, onInputChange, onIncomeChange }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = parseFloat(input) || 0;
        onIncomeChange(value);
    };

    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="flex gap-2">
                        <input
                            type="number"
                            placeholder="20000"
                            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            value={input}
                            onChange={e => onInputChange(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition duration-200"
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddIncomeInput