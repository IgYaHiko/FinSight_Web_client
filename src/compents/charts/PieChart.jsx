import React from 'react';
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { colors } from '../../constant/color';

const CustomPieChart = ({ data = [], totalAmount = 0 }) => {
  const colorMap = {
    income: '#1DCD9F',   // Green
    expense: colors.rose,  // Red
    balance: colors.primary   // Yellowish White
  };

  const getColor = (name) => {
    const key = name.toLowerCase();
    if (key.includes('income')) return colorMap.income;
    if (key.includes('expense')) return colorMap.expense;
    return colorMap.balance;
  };

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill={getColor(name)}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        style={{ fontFamily: 'futura', fontSize: 13 }}
      >
        {`${name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload?.length) {
      const { name, amount } = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: getColor(name),
            padding: '8px 12px',
            borderRadius: '8px',
            fontFamily: 'futura',
            color: '#131313',
            fontSize: 13
          }}
        >
          <p>{name}: ₹{amount}</p>
        </div>
      );
    }
    return null;
  };

  const renderCustomLegend = () => {
    return (
      <div className="flex flex-wrap justify-center gap-5 mt-4">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: getColor(item.name) }}
            />
            <p className="text-sm text-white" style={{ fontFamily: 'futura' }}>{item.name}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full relative flex flex-col items-center justify-center text-white">
      {/* Center Balance */}
      <div className="absolute z-10 text-center" style={{ top: '48%', transform: 'translateY(-50%)' }}>
        <h1 className="text-xl font-bold" style={{ fontFamily: 'futura' }}>
          ₹{totalAmount}
        </h1>
        <p className="text-sm opacity-60" style={{ fontFamily: 'futura' }}>Total Balance</p>
      </div>

      <ResponsiveContainer width="100%" height={360}>
        <RePieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={100}
            stroke="none"
            labelLine={false}
            label={renderCustomLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={renderCustomLegend} />
        </RePieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
