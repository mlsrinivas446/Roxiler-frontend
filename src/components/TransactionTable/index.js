import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.css';

const TransactionTable = ({ selectedMonth, searchQuery }) => {
    const [transactions, setTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
            const response = await axios.get(`https://roxiler-backend-eu4h.onrender.com/api/transactions?month=${selectedMonth}&search=${searchQuery}&page=${currentPage}&perPage=10`)
            setTransactions(response.data.data.transactions);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTransactions();
    }, [selectedMonth, searchQuery, currentPage]);


    

    const handleNext = () => setCurrentPage((prev) => prev + 1);
    const handlePrevious = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div>
        <table className='table'>
            <thead>
            <tr>
                <th className='id'>ID</th>
                <th className='title'>Title</th>
                <th className='description'>Description</th>
                <th className='price'>Price</th>
                <th className='category'>Category</th>
                <th className='sold'>Sold</th>
                <th className='image'>image</th>
            </tr>
            </thead>
            <tbody>
            {Array.isArray(transactions) && transactions.length > 0 ? (
                transactions.map((transaction) => (
                    <tr key={transaction.productId || transaction.id}>
                    <td className='id'>{transaction.productId}</td>
                    <td className='title'>{transaction.title}</td>
                    <td className='description'>{transaction.description}</td>
                    <td className='price'>{transaction.price}</td>
                    <td className='category'>{transaction.category}</td>
                    <td className='sold'>{transaction.sold}</td>
                    <td className='image'><img src={transaction.image} alt={ transaction.title} height="100%" width="100%" /></td>
                        
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan="3" style={{ textAlign: 'center',margin:"auto" }}>No transactions found</td>
                </tr>
                )}

            </tbody>
        </table>
        <div className='pagination-container'>
                <p className='pagination'>Page No: {currentPage}</p>
                <div>
                    <button onClick={handlePrevious} disabled={currentPage === 1} className='pagination' type="button">
                        Previous
                    </button>
                    <button onClick={handleNext} disabled={transactions.length <= 0} className='pagination' type="button">
                        Next
                    </button>
                </div>
                <p className='pagination'>Per Page: 10</p>
        </div>
        
        </div>
    );
};

export default TransactionTable;
