import React from 'react'
import { colors } from '../../constant/color';
import { FiArrowDownCircle, FiArrowUp, FiSend } from 'react-icons/fi';

const CustomButton = ({title,classNames,icons,onClick,darkmode}) => {
/* const {title,onClick,classNames,rightIcons} = props; */
  return (
   <div
  onClick={onClick}
  className={`${classNames} px-5 m-auto py-3 rounded-md flex justify-center relative items-center bg-gradient-to-r from-blue-600 to-indigo-500`}
  style={{ width: 300 }}
>
  <h1 className="text-white text-md flex items-center gap-2" style={{ fontFamily: "futura", fontWeight: 600 }}>
    
    {title}
    {icons}
  </h1>
</div>

  )
}

export default CustomButton