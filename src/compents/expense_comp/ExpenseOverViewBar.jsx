import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

/* // ✅ Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#2d2d2d] p-3 rounded-md shadow-lg text-white border border-rose-500">
        <p className="text-sm text-gray-300">{label}</p>
        <p>Categpry:{payload[0].category}</p>
        <p className="font-semibold text-rose-400">
          💸 Amount: ₹{payload[0].value}
        </p>
      </div>
    );
  }

  return null;
}; */

const ExpenseOverViewBar = ({ data = [] }) => {
  const displayData = data
  .slice(0, 10)
  .map((item) => ({
    date: new Date(item.date).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
    }),
    amount: item.amount,
    category: item.category, 
  }));


  return (
    <div className="w-full  py-3 rounded-lg ">
      <h2 className="text-white text-lg mb-3 font-semibold">Expense Trend</h2>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={displayData}>
          <defs>
            <linearGradient id="colorRose" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#fb7185" stopOpacity={0.8} />
              <stop offset="90%" stopColor="#fb7185" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="date" stroke="#bbb" />
          <YAxis stroke="#bbb" />
          
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
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#fb7185"
            fill="url(#colorRose)"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseOverViewBar;
