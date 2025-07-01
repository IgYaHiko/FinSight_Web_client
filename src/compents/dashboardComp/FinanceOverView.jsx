import React from 'react'
import { BsFillPieChartFill } from "react-icons/bs";
import { colors } from '../../constant/color';
import PieChart from '../charts/PieChart';


const COLOR = [colors.purple ,colors.rose ,colors.primary]
const FinanceOverView = ({totalBalance,totalIncome,totalExpenses}) => {
  const balance = [
    {name: "Total Balance", amount: totalBalance},
    {name: "Total Income", amount: totalIncome},
    {name: "Total Expense", amount: totalExpenses}
  ]
  return (
    <div className='px-5 py-4 bg-[#131313] rounded-lg '  >
      <div>
        <h1 className='text-white flex items-center gap-2 text-xl' style={{fontFamily: "poppins", fontWeight: 700}}>Financial Overview <BsFillPieChartFill color='yellow'/> </h1>
      </div>
      <div className='flex justify-center px-5  h-[90%] items-center ' >
        <PieChart 
         data={balance}
         colors={COLOR}
         totalAmount={`${totalBalance}`}
         label={"Total Balance"}
         showTextAnchor
        />
      </div>
    </div>
  )
}

export default FinanceOverView

 