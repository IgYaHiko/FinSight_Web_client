import React from 'react'
import { colors } from '../../constant/color'

import { LuTrash2, LuTrendingUp } from 'react-icons/lu';
import { formatAmount } from '../../utils/validate';
import { SALARY_CATEGORY_META } from '../../utils/category';

const IncomeListItems = ({ catagory, amount, type = "income", date, icon, hideDelete,onDelete }) => {
  const cat = (catagory || "other").toLowerCase();
  const matched = SALARY_CATEGORY_META[cat] || SALARY_CATEGORY_META["other"];

  return (
    <div
      className="py-4 px-5 rounded-lg mt-3 relative group transition-all duration-300"
      style={{ backgroundColor: colors.matBlack }}
    >
      <div className='flex items-center justify-between'>
        {/* Left side */}
        <div className='flex items-center gap-4'>
          <div
            style={{ backgroundColor: matched.bg }}
            className="w-10 h-10 flex justify-center items-center rounded-full"
          >
            {matched.icon}
          </div>
          <div className='flex flex-col items-start'>
            <h1 className='text-lg capitalize font-semibold' style={{ fontFamily: "poppins" }}>{catagory}</h1>
            <p className='text-xs'>{type}</p>
          </div>
        </div>

        {/* Right side */}
        <div className='flex relative items-center gap-10'>
          {!hideDelete && (
            <button
              onClick={onDelete}
              className="opacity-0 absolute right-32 group-hover:opacity-100 transition-all duration-300 p-2 hover:bg-red-500 rounded-full"
              title="Delete"
            >
              <LuTrash2 className="text-white" />
            </button>
          )}
          <div className='flex flex-col gap-1 items-end'>
            <div className='flex items-center gap-2 py-0.5 px-2 rounded-lg bg-green-200'>
              <h1 className='text-green-700'>+ {formatAmount(amount)}</h1>
              <LuTrendingUp color={colors.matBlack} />
            </div>
            <h1 className='text-xs text-white opacity-60'>{new Date(date).toLocaleDateString()}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IncomeListItems;
