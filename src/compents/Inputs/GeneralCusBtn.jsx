import React from 'react';
import { colors } from '../../constant/color';

const GeneralCusBtn = ({
  lefttIcon,
  onClick,
  name,
  styles = '',
  type = "button",
  backgroundColors = colors.primary
}) => {
  return (
    <div className="mt-5 w-full">
      <button
        type={type}
        onClick={onClick}
        className={`
          w-full
          flex
          items-center
          justify-center
          gap-2
          text-white 
          px-5 
          py-3 
          rounded-lg  
          text-base 
          transition-all 
          duration-200 
          hover:opacity-90 
          active:scale-[0.98]
          break-words
          ${styles}
        `}
        style={{ fontFamily: 'futura', backgroundColor: backgroundColors }}
      >
        {lefttIcon && <span className="text-lg">{lefttIcon}</span>}
        <span>{name}</span>
      </button>
    </div>
  );
};

export default GeneralCusBtn;
