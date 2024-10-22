import React from 'react';
import "./index.css"

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const SearchAndMonthDropdowm = ({ selectedMonth, setSelectedMonth ,searchQuery,setSearchQuery}) => {
  const handleChange = (event) => {
    setSelectedMonth(event.target.value);
  };

    return (
        <div className='search-month-container'>
            <input  type="text" className="search" placeholder='Search transaction' value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <select value={selectedMonth} onChange={handleChange} className='select'>
            {months.map((month, index) => (
                <option key={index} value={index + 1}>{month}</option>
            ))}
            </select>
      </div>
    
  );
};

export default SearchAndMonthDropdowm;
