import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Label, ResponsiveContainer } from 'recharts';

const TransactionsBarChart = ({ selectedMonth }) => {
  const [chartData, setChartData] = useState([]);
  console.log(chartData)

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get(`https://roxiler-backend-eu4h.onrender.com/api/bar-chart?month=${selectedMonth}`);
        setChartData(response.data.data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };
    fetchChartData();
  }, [selectedMonth]);


  return (
    <div style={{ width: '100%', height: 400 }}> 
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="range" stroke="#8884d8">
            <Label value="Ranges" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="Items count" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 40,
              right: 20,
              backgroundColor: '#f5f5f5',
              border: '1px solid #d5d5d5',
              borderRadius: 3,
              lineHeight: '40px',
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="itemsCount" fill="#8884d8" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionsBarChart;
