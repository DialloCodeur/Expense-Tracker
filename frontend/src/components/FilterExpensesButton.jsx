function FilterExpensesButton({ isFilterInputVisible, onFilterInputVisibiltyChange }) {

    return (
        <>
            <select className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition duration-200" onClick={() => onFilterInputVisibiltyChange(!isFilterInputVisible)}>
                <option value="byDate">By date</option>
                <option value="byCategory">By category</option>
            </select>

        </>
    )
}

export default FilterExpensesButton