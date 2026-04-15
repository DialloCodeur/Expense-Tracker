import AddIncomeButton from "./AddIncomeButton"
import AddExpenseButton from "./AddExpenseButton"
import FilterExpensesButton from "./FilterExpensesButton"

function QuickActions({ isIncomeInputVisible, onIncomeInputVisibilityChange, isExpenseInputVisible, onExpenseInputVisibilityChange, isFilterInputVisible, onFilterInputVisibiltyChange }) {
    return (
        <>
            <section className="bg-white shadow rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-2">Quick Actions / Insights</h2>
                <div className="h-32 bg-gray-100 flex items-center justify-center gap-8">
                    <AddIncomeButton
                        isIncomeInputVisible={isIncomeInputVisible}
                        onIncomeInputVisibilityChange={onIncomeInputVisibilityChange}
                    />
                    <AddExpenseButton
                        isExpenseInputVisible={isExpenseInputVisible}
                        onExpenseInputVisibilityChange={onExpenseInputVisibilityChange}
                    />
                    <FilterExpensesButton
                        isFilterInputVisible={isFilterInputVisible}
                        onFilterInputVisibiltyChange={onFilterInputVisibiltyChange}
                    />
                </div>
            </section>
        </>
    )
}

export default QuickActions