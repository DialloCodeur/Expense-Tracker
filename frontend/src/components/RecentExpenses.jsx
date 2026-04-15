import { SquarePen, Trash2 } from "lucide-react"

function RecentExpenses({ expenseDetails = [], onExpenseDeletionChange }) {
    return (
        <section className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <span className="text-indigo-600">💰</span> Recent Expenses
            </h2>

            {expenseDetails.length > 0 ? (
                <div className="overflow-x-auto">
                    <div className="min-w-full divide-y divide-gray-200">
                        <div className="grid grid-cols-5 gap-4 px-4 py-3 text-sm font-semibold text-left text-black-500 uppercase bg-gray-200 rounded-lg">
                            <div>Category</div>
                            <div>Description</div>
                            <div>Amount</div>
                            <div>Date</div>
                            <div>Actions</div>
                        </div>

                        {expenseDetails.map((detail) => (
                            <div
                                key={detail.id}
                                className="grid grid-cols-5 gap-4 px-4 py-4 items-center text-sm text-gray-700 border-t border-gray-100 hover:bg-gray-50"
                            >
                                <div>{detail.category}</div>
                                <div>{detail.description}</div>
                                <div>
                                    {new Intl.NumberFormat("fr-FR", {
                                        style: "currency",
                                        currency: "XOF",
                                    }).format(detail.amount)}
                                </div>
                                <div>
                                    {new Date(detail.date).toLocaleDateString("fr-FR", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                    })}
                                </div>
                                <div className="flex justify-start items-center gap-2">
                                    <button
                                        type="button"
                                        className="p-2 rounded-md text-indigo-600 hover:bg-indigo-50"
                                    >
                                        <SquarePen size={16} />
                                    </button>
                                    <button
                                        type="button"
                                        className="p-2 rounded-md text-red-600 hover:bg-red-50"
                                        onClick={() => onExpenseDeletionChange(detail.id)}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center py-8 text-gray-400">
                    <p>No expenses yet</p>
                </div>
            )}
        </section>
    )
}

export default RecentExpenses