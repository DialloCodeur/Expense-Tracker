function AddIncomeButton({ isIncomeInputVisible, onIncomeInputVisibilityChange }) {
    return (
        <>
            <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition duration-200" onClick={() => onIncomeInputVisibilityChange(!isIncomeInputVisible)}>+ Add Income</button>
        </>
    )
}

export default AddIncomeButton