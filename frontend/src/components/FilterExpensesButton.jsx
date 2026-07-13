function FilterExpensesButton({ isFilterInputVisible, onFilterInputVisibilityChange }) {
    return (
        <button
            type="button"
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition duration-200"
            onClick={() => onFilterInputVisibilityChange(!isFilterInputVisible)}
        >
            {isFilterInputVisible ? "Hide filter" : "Filter expenses"}
        </button>
    )
}

export default FilterExpensesButton