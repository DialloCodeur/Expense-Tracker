function SummaryCards({ income, expense }) {
    return (
        <>
            {/* Summary cards row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white shadow rounded-lg p-4">Total of income: {income} FCFA </div>
                <div className="bg-white shadow rounded-lg p-4">Monthly expense: {expense} FCFA </div>
                <div className="bg-white shadow rounded-lg p-4">Blance: {income - expense} FCFA</div>
                <div className="bg-white shadow rounded-lg p-4">Number of transactions</div>
            </div>
        </>
    )
}

export default SummaryCards