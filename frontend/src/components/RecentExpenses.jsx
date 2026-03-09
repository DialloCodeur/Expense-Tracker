function RecentExpenses({ expenseDetails }) {
    console.log(expenseDetails)
    return (
        <>
            <section className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                    <span className="text-indigo-600">💰</span> Recent Expenses
                </h2>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                    {expenseDetails.length > 0 ? (
                        expenseDetails.map(detail => (
                            <div key={detail.id} className="bg-linear-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-600 mb-2">{detail.description}</p>
                                        <div className="flex flex-wrap gap-3 text-sm">
                                            <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium">{detail.category}</span>
                                            <span className="text-gray-500">{detail.date}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-bold text-indigo-600">{detail.amount} FCFA</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8 text-gray-400">
                            <p>No expenses yet</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default RecentExpenses