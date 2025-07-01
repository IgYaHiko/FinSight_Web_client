import React from 'react';
import { CATEGORY_META } from '../../utils/category';
import { colors } from '../../constant/color';
import { formatAmount } from '../../utils/validate';
import { LuTrash, LuTrash2, LuTrendingDown } from 'react-icons/lu';

const ExpenseItems = ({
  category,
  icon,
  amount,
  date,
  hideDelete,
  onDelete,
  type = "expense",
}) => {
  const cat = (category || "other").toLowerCase();
  const matched = CATEGORY_META[cat] || CATEGORY_META["other"];

  return (
    <div
      className="py-4 px-5 rounded-md relative group transition-all duration-300"
      style={{ backgroundColor: colors.matBlack }}
    >
      <div className="flex justify-between items-center">
        {/* Left Section: Category Icon & Info */}
        <div className="flex items-center gap-4">
          <div
            style={{ backgroundColor: matched.bg }}
            className="rounded-full p-3"
          >
            {matched.icon}
          </div>

          <div className="flex flex-col items-start">
            <h1
              className="text-white text-md capitalize font-semibold"
              style={{ fontFamily: 'poppins' }}
            >
              {category}
            </h1>
            <p
              className="text-white text-xs opacity-60"
              style={{ fontFamily: 'futura' }}
            >
              {type}
            </p>
          </div>
        </div>

        {/* Right Section: Amount & Date */}
       <div className='relative'>
         {!hideDelete && (
        <button
          onClick={onDelete}
          className="opacity-0 group-hover:opacity-100 absolute right-32 top-3 transition-all duration-300 p-2 hover:bg-red-500 rounded-full"
          title="Delete"
        >
          <LuTrash2 color='white' size={18} />
        </button>
      )}
          <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-2 bg-red-200 text-red-800 py-1 px-2 rounded-md">
            <h1
              style={{ fontFamily: 'futura' }}
              className="text-md"
            >
              - {formatAmount(amount)}
            </h1>
            <LuTrendingDown color={colors.black} />
          </div>
          <p className="text-white text-xs opacity-60">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
       </div>
      </div>

      {/* Hidden Delete Button - Shown on Hover */}
      
    </div>
  );
};

export default ExpenseItems;
