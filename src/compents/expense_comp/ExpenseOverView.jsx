import React, { useState } from 'react'
import { useEffect } from 'react';
import { prepareDataExpense } from '../../utils/validate';
import { GiExpense } from 'react-icons/gi';
import { colors } from '../../constant/color';
import { FaPlus } from 'react-icons/fa';
import ExpenseOverViewBar from './ExpenseOverViewBar';

const ExpenseOverView = ({data=[],addExpense}) => {
    const [expense,setExpense] = useState([]);
    useEffect(() => {
         const res = prepareDataExpense(data);
          // Prevent infinite re-render loop
    if (JSON.stringify(res) !== JSON.stringify(expense)) {
      setExpense(res);
    }
    },[data]);
  return (
    <div className='grid-cols-1 md:grid-cols-1'>
      <div className='flex justify-between items-center '>
        <div>
            <h1 style={{fontFamily: "futura", fontWeight: 700}} className='flex  items-center gap-2 text-lg text-white'>Expense Overview <GiExpense color={colors.rose} size={20} /></h1>
            <p className='text-md text-white opacity-60' style={{fontFamily: "futura"}} >Track your expenses over time and analyze your income trends</p>
        </div>
       
       <div onClick={addExpense} className='bg-red-200 px-2 py-1 flex justify-center items-center rounded-lg'>
        <button className='text-xs text-red-800 flex items-center gap-1' style={{fontFamily: "futura"}} ><FaPlus/> Add Expense</button>
       </div>
      </div>
     <div className='mt-5 w-full '>
        <ExpenseOverViewBar data={expense} />
     </div>
    </div>
  )
}

export default ExpenseOverView