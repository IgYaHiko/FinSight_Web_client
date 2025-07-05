import React from 'react'
import { FaPlus, FaStarOfLife } from 'react-icons/fa'
import { GoNorthStar } from 'react-icons/go'
import { colors } from '../../constant/color'
import FeatureCard from './FeatureCard'
import { images } from '../../constant/images'
import AvatarGroup from './AvatarGroup'

const tags = [
  { name: "Add Income" },
  { name: "Add Expense" },
  { name: "Download Transactions" },
  { name: "Transaction Analytics" },
  { name: "Dashboard" },
  { name: "Interactive UI" }
]
const member = [
    {members: images.ME_TWO},
    {members: images.EX},
    {members: images.AVIK},
    {members: images.AYAN}
]
const Feature = () => {
  return (
    <section className="py-5 lg:py-24 px-4 md:px-0">
      <div className="container mx-auto flex flex-col items-center">
        {/* Badge Button */}
        <button
          className="uppercase text-md flex items-center py-1 px-3 rounded-full gap-2"
          style={{
            color: colors.primary,
            fontFamily: "Poppins",
            fontWeight: 600,
            border: `1px solid ${colors.primary}`
          }}
        >
          <FaStarOfLife /> Features
        </button>

        {/* Heading */}
        <h1
          className="text-white mt-4 text-4xl md:text-8xl text-center leading-tight"
          style={{ fontFamily: "Poppins", fontWeight: 700 }}
        >
          Where power meets <span style={{ color: colors.primary }}>simplicity</span>
        </h1>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  
    <FeatureCard
      
      title={"The Minds Behind FinSight"}
      describtion={"Built by a passionate team committed to making finance simple and intuitive."}
     
    >
     <div className='flex justify-center'>
        <AvatarGroup/>
     </div>
    </FeatureCard>
  <FeatureCard
      
      title={"Visualize Your Financial Life"}
      describtion={"Track income, expenses, and trends with clean, interactive charts."}
     
    >
     <div className='flex justify-center relative text-center'>
        <h1 className='text-white/15 text-4xl lg:text-5xl group' style={{fontFamily: "poppins", fontWeight: 700}}>We'vd Achived <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
             <video
             className="absolute top-1 left-1/2 opacity-0 group-hover:opacity-100 transform -translate-x-1/2 -translate-y-1/2 w-40 transition duration-500"
             src={images.Incridible}
             autoPlay
             loop
            muted
           playsInline
  />
             <span>Incredible</span>
            </span> growth this year</h1>
     </div>
    </FeatureCard>
     <FeatureCard
      
      title={"Fast. Secure. Reliable."}
      describtion={"Powered by the MERN stack with JWT auth for smooth and secure access."}
     
    >
   <div className='flex justify-center mt-10 items-center gap-5'>
  <div className='bg-[#ddd] px-12 py-4 text-2xl rounded-xl shadow-md cursor-pointer transition duration-200 transform hover:scale-95 active:scale-90 border-4 border-transparent hover:border-[#0065F8]'>
    Ctrl
  </div>

  <FaPlus color='#ddd' />

  <div className='bg-[#ddd] px-6 py-5 rounded-xl shadow-md cursor-pointer transition duration-200 transform hover:scale-95 active:scale-90 border-4 border-transparent hover:border-[#0065F8]'>
    J
  </div>
</div>

    </FeatureCard>
</div>


        {/* Feature Grid */}
        <div className="w-full flex md:ml-0 justify-center mt-8 md:mt-12">
  <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-white text-left md:flex">
    {tags.map((data, i) => (
      <div
        key={i}
        className="group flex items-center gap-2 text-sm md:text-base bg-[#131313] px-3 py-2 rounded-xl border border-white/15 transition-transform duration-300 hover:scale-105"
      >
        <GoNorthStar
          className="text-white p-1 rounded-full transform transition-transform duration-300 group-hover:rotate-45"
          size={20}
          style={{ backgroundColor: colors.primary }}
        />
        <span
          className="text-xs"
          style={{ fontFamily: 'poppins' }}
        >
          {data.name}
        </span>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  )
}

export default Feature
