import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Expense Tracker</h1>

      <div className="add-expense">
        <h2>Add Expense</h2>
        <input type="text" placeholder="Description" />
        <input type="number" placeholder="Amount" />
        <select>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
        <button>Add Expense</button>
      </div>

      <div className="filter">
        <h3>Filter by Category</h3>
        <select>
          <option value="">All</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="expense-list">
        <h4>Expense List</h4>
        <ul>
          <li>Food: $50</li>
          <li>Transport: $30</li>
          <li>Entertainment: $20</li>
        </ul>
      </div>
    </div>
  )
}

export default App 
