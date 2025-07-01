import React from 'react'
import { FaGoogleWallet } from 'react-icons/fa'
import { colors } from '../../constant/color'
import { LuArrowRight } from 'react-icons/lu'
import IncomeOverviewBar from './IncomeOverviewBar'
import { useState } from 'react'
import { useEffect } from 'react'
import { incomeData, prepareDataIncome } from '../../utils/validate'
import { PiPlus } from 'react-icons/pi'
import { FaPlus } from "react-icons/fa6";

const IncomeOverview = ({data=[],addIncome}) => {
    const [income,setIncome] = useState([]);
    useEffect(() => {
         const res = prepareDataIncome(data);
         setIncome(res)
    },[data]);
  return (
    <div className=''>
     <div className='text-white flex items-center justify-between'>
        <div>
          <h1 style={{fontFamily: "futura", fontWeight: 700}}  className='flex items-center gap-2 ' >Income Overview <FaGoogleWallet size={20} color={colors.newGreen} /> </h1>
          <p style={{fontFamily: "futura"}} className='text-white font-light text-md opacity-50'>Track your earnings over time and analyze your income trends</p>
        </div>
        <div>
         <div onClick={addIncome} className='flex bg-green-200 px-2 py-1 rounded-lg  items-center gap-2' >
             <FaPlus color='black' />
            <h1 className='text-green-800 font-bold text-xs' >Add Income</h1>
           
        </div>
       </div>
     </div>
    <div className='flex justify-center mt-10  w-full  h-[90%] items-center ' >
        <IncomeOverviewBar data={income} />
      </div>

    </div>
  )
}

export default IncomeOverview