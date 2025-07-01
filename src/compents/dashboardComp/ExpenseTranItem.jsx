import React from 'react';
import { colors } from '../../constant/color';
import { CATEGORY_META } from '../../utils/category';
import { formatAmount } from '../../utils/validate';
import { LuTrendingDown, LuTrendingUp } from 'react-icons/lu';


// 🧠 Dummy category meta (icon + color)


const ExpenseTranItem = ({ catagory, category, amount, type="expense", date ,icon}) => {
  const cat = (category || catagory || "other").toLowerCase();

  const matched = CATEGORY_META[cat] || CATEGORY_META["other"]; 

  return (
    <div className="w-full py-4 px-4 rounded-md "  style={{ backgroundColor: "#171717" }} >
      <div className="flex items-center gap-3">
        {/* Icon Bubble */}
        <div className="w-10 h-10 flex justify-center items-center rounded-full" style={{ backgroundColor: matched.bg }}>
          {matched.icon}
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <h1 className="text-white text-md capitalize font-semibold" style={{ fontFamily: 'poppins' }}>
            {category || catagory}
          </h1>
          <p style={{fontFamily: "futura"}} className="text-white opacity-50 text-xs">
            {type}
          </p>
        </div>

        {/* Amount */}
        <div className="ml-auto flex flex-col items-end">
         <div  className={`flex justify-center rounded-md px-1.5 py-0.5  items-center gap-1 ${type === "income" ? "bg-green-200 ": "bg-red-200"} `} >
             <p  style={{fontFamily: "futura"}} className={`text-xs  ${type === 'income' ? 'text-green-700' : 'text-red-700'}  `}>
            {
                type === 'income' ? "+" : "-"
            } {formatAmount(amount)}
          </p>
          { type === "income" ? <LuTrendingUp/> : <LuTrendingDown/> }
         </div>
          <p className='text-white mt-1 text-xs opacity-50' >{new Date(date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTranItem;
