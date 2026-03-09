function Charts() {
    return (
        <>
            {/* Charts row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-lg p-4 h-64">Expenses per category</div>
                <div className="bg-white shadow rounded-lg p-4 h-64">Expenses evolution</div>
                <div className="bg-white shadow rounded-lg p-4 h-64">Incomes vs Expenses</div>
            </div>
        </>
    )
}

export default Charts