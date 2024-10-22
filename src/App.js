import React, { useState } from 'react';
import "./App.css";
import SearchAndMonthDropdowm from './components/SearchAndMonthDropdown';
import TransactionTable from './components/TransactionTable';
import TransactionsBarChart from './components/TransactionsBarChart';
import TransactionsStatistics from './components/TransactionsStatistics';

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState(3); 
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <div className="app-heading-container">
        <h1 className="app-heading">Transactions Dashboard</h1>
      </div>
      <SearchAndMonthDropdowm selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TransactionTable selectedMonth={selectedMonth} searchQuery={searchQuery} />
      <TransactionsStatistics selectedMonth={selectedMonth} />
      <TransactionsBarChart selectedMonth={selectedMonth} />
    </div>
  );
};

export default App;
