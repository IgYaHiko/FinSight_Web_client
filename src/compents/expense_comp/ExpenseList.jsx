import React from 'react'
import { GiSnatch } from "react-icons/gi";
import { colors } from '../../constant/color';
import { FaDownload } from 'react-icons/fa';
import ExpenseItems from './ExpenseItems';
import NoDataFound from '../404/NoDataFound';

const ExpenseList = ({transaction=[], onDelete, onDownload}) => {
  return (
    <div className='bg-[#131313] py-4 px-5 rounded-lg'>
        <div className='flex justify-between items-center'>
            <div>
                <h1 style={{fontFamily: "futura", fontWeight: 700}} className='text-white flex items-center text-lg gap-2'>Expense Source  <GiSnatch color={colors.rose} size={20}  /></h1>
            </div>

            <div>
                <button onClick={onDownload} className='bg-red-200 flex items-center gap-1 text-red-900 text-xs py-1 px-2 rounded-md' style={{fontFamily: "futura"}} >
                 <FaDownload />   Download
                </button>
            </div>
        </div>

        <div className='mt-3 flex flex-col gap-4'>
           {
            Array.isArray(transaction) && transaction.length > 0 ? (
                transaction.map((data,idx) => (
                       
                     <ExpenseItems onDelete={() => onDelete(data)} {...data} key={idx} />
                ))
            ) : (
               <NoDataFound />
            )
           }
        </div>
    </div>
  )
}

export default ExpenseList