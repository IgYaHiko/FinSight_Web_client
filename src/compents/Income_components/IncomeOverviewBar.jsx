import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend
} from 'recharts';
import { colors } from '../../constant/color';

const IncomeOverviewBar = ({ data = [] }) => {
  const displayedData = data.slice(0, 10);
  console.log("income bar data",displayedData);
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={displayedData} margin={{ top: 20, right: 30, left: 0, bottom: 30 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        
        <XAxis
          dataKey="category"
          tick={{ fill: '#ccc', fontFamily: 'futura', fontSize: 12 }}
          label={{ value: "", position: "insideBottom", offset: -15, fill: '#ccc', fontFamily: 'futura' }}
        />

        <YAxis
          tick={{ fill: '#ccc', fontFamily: 'futura', fontSize: 12 }}
          label={{ value: "", angle: -90, position: 'insideLeft', fill: '#ccc', fontFamily: 'futura' }}
        />

        <Tooltip
          cursor={{ fill: 'transparent' }}
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const item = payload[0].payload;
              return (
                <div style={{ background: '#1f1f1f', padding: 10, borderRadius: 8, color: 'white', fontFamily: 'futura' }}>
                  <p>📅 <strong>{item.date}</strong></p>
                  <p>🏷️ Category: {item.category}</p>
                  <p>💰 Amount: ₹{item.amount}</p>
                </div>
              );
            }
            return null;
          }}
        />  

        <Legend
          iconType='circle'
          wrapperStyle={{
            fontFamily: 'futura',
            fontSize: 13,
            color: '#fff',
            
          }}
        />

        <Bar
          dataKey="amount"
          fill={colors.newGreen}
          radius={[5, 5, 0, 0]}
          name="Income"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default IncomeOverviewBar;
