function AddExpenseButton({ isExpenseInputVisible, onExpenseInputVisibilityChange }) {
    return (
        <>
            <button onClick={() => onExpenseInputVisibilityChange(!isExpenseInputVisible)} className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition duration-200">+ Add Expense</button>
        </>
    )
}

export default AddExpenseButton