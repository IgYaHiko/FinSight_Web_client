import React from 'react'
import { BsFillPieChartFill } from "react-icons/bs";
import { colors } from '../../constant/color';
import PieChart from '../charts/PieChart';
import { useState } from 'react';
import { useEffect } from 'react';
import { barChartData } from '../../utils/validate';
import ExpenseBarChart from '../charts/ExpenseBarChart';



const  ExpenseChart30 = ({data}) => {
  const [chartData,setChartData] = useState([]);

   useEffect(() => {
       const res = barChartData(data);
       setChartData(res);
   },[data])
  return (
    <div className='px-5 py-4 bg-[#131313] rounded-lg '  >
      <div>
        <h1 className='text-white flex items-center gap-2 text-xl' style={{fontFamily: "poppins", fontWeight: 700}}>Last 30 Days Expenses<BsFillPieChartFill color={colors.rose} /> </h1>
      </div>
      <div className='flex justify-center mt-7   h-[90%] items-center ' >
       <ExpenseBarChart data={chartData} />
      </div>
    </div>
  )
}

export default ExpenseChart30

 