import React from 'react'
import { images } from '../../constant/images'

const NoDataFound = () => {
  return (
    <div className='text-white flex justify-center items-center  pt-2 pb-4'>
       <div className='flex flex-col items-center'> 
        <img className='w-[400px] h-[400px]' src={images.NOT_FOUND} alt="" />
        <h1 className='text-4xl text-white opacity-60 font-black' style={{fontFamily: "futura"}}>DATA NOT FOUND</h1>
        </div>
    </div>
  )
}

export default NoDataFound