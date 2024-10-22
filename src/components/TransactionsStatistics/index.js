import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.css'

const TransactionsStatistics = ({ selectedMonth }) => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(`https://roxiler-backend-eu4h.onrender.com/api/statistics?month=${selectedMonth}`);
        setStatistics(response.data.data);
      } catch (error) {
        console.error(error);
      }
      };
    fetchStatistics();
  }, [selectedMonth]);


  const getMonthName = (month) => {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Invalid Month"; 
  }
};

  return (
    <div className='statistics'>
      <h3>Statistics - {getMonthName(selectedMonth)}</h3>
      <div>Total Sale: {statistics.totalSale}</div>
      <div>Total Sold Items: {statistics.totalSoldItems}</div>
      <div>Total Not Sold Items: {statistics.totalNotSoldItems}</div>
    </div>
  );
};

export default TransactionsStatistics;
