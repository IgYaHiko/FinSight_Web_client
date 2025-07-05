import React from 'react'

const FeatureCard = ({ title, describtion, icons, imgs, fontColor ,children}) => {
  return (
    <div className="flex flex-col justify-between h-full py-6 mt-5 px-5 bg-neutral-900 border border-white/15 rounded-2xl">
      
      {/* Optional image/video section */}
      <div className="aspect-video pt-10">
        {children}
      </div>

      {/* Text Content */}
      <div className="flex flex-col mt-6 items-start">
        <h1
          className="text-white text-3xl lg:text-4xl"
          style={{ color: fontColor, fontFamily: "Poppins", fontWeight: 700 }}
        >
          {title}
        </h1>
        <p className="text-white opacity-60 text-md md:text-lg mt-2" style={{fontFamily: "futura"}}>{describtion}</p>
      </div>
      
    </div>
  )
}

export default FeatureCard
