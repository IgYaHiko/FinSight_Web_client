import React from 'react'
import { FaStarOfLife } from 'react-icons/fa'
import { colors } from '../../constant/color'
import { Integration } from '../../constant/images'
import IntegrationCol from './IntegrationCol'

const Integrations = () => {
  return (
   <section className='py-20 px-5'>
    <div className='container mx-auto'>
       <div className='grid lg:grid-cols-2 items-center lg:gap-16'>
        <div>
        <button className='uppercase text-md  flex items-center py-1 px-3 rounded-full gap-2' style={{color: colors.primary, fontFamily: "poppins", fontWeight: 600, border: `1px solid ${colors.primary}`}}> <FaStarOfLife/>Integration</button>

       <h1 className='text-white mt-3 text-4xl md:text-7xl' style={{fontFamily: "poppins", fontWeight: 600}}><span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>Plays, </span>well with others</h1>

       <p  className='text-white/30 mt-2 text-lg'>FinSight seamlessly connects with many tools, making it easy to plug into any workflow and collaborate across platforms.</p>
       </div>

      <div className='h-[400px] lg:h-[600px] mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,_transparent,_black_20%,_black_90%,_transparent)]  md:grid grid-cols-2 gap-4'>
        <IntegrationCol data={Integration}/>
        <IntegrationCol data={Integration.slice().reverse()} classNames={"hidden md:flex"} reverse/>
      </div> 
       </div>
    </div>
   </section>
  )
}

export default Integrations