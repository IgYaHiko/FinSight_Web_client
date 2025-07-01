import React, { useEffect, useState } from 'react';
import { FaWallet } from 'react-icons/fa';
import { colors } from '../../constant/color';
import { incomeData } from '../../utils/validate';
import IncomeBarChart from '../charts/IncomeBarChart';
import NoDataFound from '../404/NoDataFound';

const Last60Income = ({ data = [] }) => {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    const res = incomeData(data);

    // Prevent infinite re-render loop
    if (JSON.stringify(res) !== JSON.stringify(income)) {
      setIncome(res);
    }
  }, [data]);

  return (
    <div className='bg-[#131313] rounded-lg px-5 py-4 h-full'>
      <div className='flex items-center gap-2 mb-4'>
        <h1
          className='text-white text-lg'
          style={{ fontFamily: 'poppins', fontWeight: 700 }}
        >
          Last 60 Days Incomes
        </h1>
        <FaWallet color={colors.newGreen} />
      </div>

      <div className='flex justify-center  items-center h-[250px]'>
        {income.length > 0 ? (
          <IncomeBarChart data={income} />
        ) : (
          <div className='mt-60'>
             <NoDataFound/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Last60Income;
