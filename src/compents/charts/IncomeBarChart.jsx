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

const IncomeBarChart = ({ data = [] }) => {
  // Limit data to 5 entries max
  const displayedData = data.slice(0, 3);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={displayedData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis
          dataKey="category"
          tick={{ fill: '#ccc', fontFamily: 'futura', fontSize: 12 }}
        />
        <YAxis
          tick={{ fill: '#ccc', fontFamily: 'futura', fontSize: 12 }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1f1f1f',
            border: 'none',
            borderRadius: 8,
            fontFamily: 'futura',
            color: '#fff'
          }}
          formatter={(value) => [`₹${value}`, 'Amount']}
        />
        <Legend
          wrapperStyle={{
            fontFamily: 'futura',
            fontSize: 13,
            color: '#fff'
          }}
        />
        <Bar dataKey="amount" fill={`${colors.newGreen}`} radius={[5, 5, 0, 0]} name="Income" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default IncomeBarChart;
