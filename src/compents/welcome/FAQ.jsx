import React from 'react'
import { FaStarOfLife } from 'react-icons/fa'
import { colors } from '../../constant/color'
import FaqCards from './FaqCards'
import { faqQS } from '../../constant/images'

const FAQ = () => {
  return (
   <section className='py-5 lg:py-24 px-7 md:px-2'>
           <div className='container mx-auto flex flex-col items-center justify-center'>
             <button className='uppercase text-md flex items-center py-1 px-3 rounded-full gap-2' style={{color: colors.primary, fontFamily: "poppins", fontWeight: 600, border: `1px solid ${colors.primary}`}}> <FaStarOfLife/>FAQ</button>
             <h1 className='text-white mt-5 text-4xl lg:text-8xl text-center' style={{fontFamily: "poppins", fontWeight: 700}}>Question ? We've got<span className='text-blue-500'> answers.</span></h1>

            <div className='flex flex-col max-w-xl mx-auto justify-center mt-5'>
                <FaqCards  data={faqQS} />
            </div>

           </div>
       </section>
  )
}

export default FAQ