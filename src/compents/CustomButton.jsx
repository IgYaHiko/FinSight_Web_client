import React from 'react'
import { colors } from '../constant/color';
import { FiArrowDownCircle, FiArrowUp, FiSend } from 'react-icons/fi';

const CustomButton = ({title,classNames,icons,onClick,darkmode}) => {
/* const {title,onClick,classNames,rightIcons} = props; */
  return (
    <div onClick={onClick} className={`${classNames} px-5 m-auto py-4 rounded-full flex justify-center relative items-center`} style={{backgroundColor: colors.primary, width: 300}} >
      <h1 className='text-white' style={{fontFamily: "poppins", fontWeight: 700}}>{title}</h1> 
      <div style={{backgroundColor: darkmode ? `${colors.myblack}` : `${colors.white}`}} className=' absolute right-2 rounded-full p-3' >
       {icons}
      </div>
    </div>
  )
}

export default CustomButton