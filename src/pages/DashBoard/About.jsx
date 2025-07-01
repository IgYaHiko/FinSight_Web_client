import React from 'react';
import DashboardLayout from '../../compents/layout/DashboardLayout';
import { colors } from '../../constant/color';
import { aboutData } from '../../utils/validate';
import { images } from '../../constant/images';
import { FaGithub } from 'react-icons/fa';
import { GiTechnoHeart } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import Cylinder from '../../compents/canvas/Cylinder';
import TechStack from '../../compents/canvas/TechStack';

const About = () => {
  return (
    <DashboardLayout>
      <div className="w-full px-4 md:px-5">
        <div className="mx-auto px-5 md:px-20 flex flex-col gap-0">
          <h1
            className="text-[10vw] sm:text-[14vw] font-extrabold leading-tight text-white text-center"
            style={{ fontFamily: 'Poppins' }}
          >
            About <span style={{ color: colors.primary }}>Us</span>
          </h1>

          <div className="text-white text-lg sm:text-lg opacity-60 leading-tight" style={{ fontFamily: 'monospace' }}>
            {aboutData.map((data, ix) => (
              <p key={ix}>{data.datas}</p>
            ))}
          </div>
        </div>

        <div className='mt-20 flex flex-col xl:flex-row justify-between gap-10'>
          <div className='flex flex-col gap-20'>
            <div>
              <p className='text-white opacity-60 mb-1' style={{ fontFamily: "poppins" }}>Our History</p>
              <h1 style={{ fontFamily: "futura", fontWeight: 700 }} className='text-white uppercase text-3xl'>
                Founded by <span className='text-red-400'>Dojo Katana</span> Team,
              </h1>
              <h1 style={{ fontFamily: "futura", fontWeight: 700 }} className='text-white uppercase text-4xl'>
                We code to <span className='text-red-400'>express</span> not to <span className='text-blue-400'>impress.</span>
              </h1>
              <h1 style={{ fontFamily: "futura", fontWeight: 700 }} className='text-white uppercase text-3xl'>
                Crafting the<span className='text-neutral-600'> unconventional.</span>
              </h1>
              <button style={{ fontFamily: 'futura' }} className='text-white bg-[#0065F8] py-3 px-5 mt-2'>Learn More</button>
            </div>

            <div>
              <h1 style={{ fontFamily: "poppins" }} className='text-white text-lg opacity-60'>
                Credits
              </h1>
              <div className='flex flex-col mt-2'>
                <h1 style={{ fontFamily: "poppins", fontWeight: 700 }} className='text-white text-6xl'>
                  <span className='text-neutral-500'>Commited</span> to
                </h1>
                <h1 style={{ fontFamily: "poppins", fontWeight: 700 }} className='text-white text-6xl'>
                  exceptional <span className='text-blue-400'>Quality</span>
                </h1>
                <p className='text-white mt-3 text-md opacity-60' style={{ fontFamily: "monospace" }}>Take control. Stay organized. Plan better — with FinSight.</p>
              </div>
            </div>
          </div>

          <div className='w-full max-w-[380px] h-auto'>
            <img
              src={images.ME_TWO}
              alt=""
              className="w-full rounded-md h-auto object-cover filter grayscale-100"
            />
            <div className='flex gap-4 items-center'>
              <div className='flex flex-col ml-3'>
                <h1 style={{ fontFamily: "monospace" }} className='text-white capitalize text-2xl mt-3'>
                  Subhro Kolay
                </h1>
                <h1 style={{ fontFamily: "monospace" }} className='text-white text-xs opacity-60'>Project head & Developer...</h1>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5'>
          <div className='w-full max-w-[380px]  h-auto'>
            <img src={images.EX_TWO} className='grayscale rounded-md w-full h-auto object-cover' alt="" />
            <h1 style={{ fontFamily: "monospace" }} className='text-white capitalize text-2xl mt-3'>Its Me Again</h1>
            <h1 style={{ fontFamily: "monospace" }} className='text-white text-xs opacity-60'>born to express...</h1>
          </div>

          <div className='w-full max-w-[340px] h-auto'>
            <img src={images.EX} className='w-full  mt-6 h-auto object-cover rounded-md' alt="" />
            <h1 style={{ fontFamily: "monospace" }} className='text-white capitalize text-2xl mt-3'>Chandrima Ray</h1>
            <h1 style={{ fontFamily: "monospace" }} className='text-white text-xs opacity-60'>UI UX & Frontend Developer...</h1>
          </div>

          <div className='text-white text-3xl text-left xl:text-right' style={{ fontFamily: "poppins", fontWeight: 700 }}>
            <p className='text-white opacity-60 text-xs'>Teammates</p>
            <h1>Built with logic</h1>
            <h1><span className='text-blue-400'>Designed</span> With <span className='text-red-400'>passion</span>.</h1>
            <p style={{ fontFamily: "monospace" }} className='text-xs opacity-60 font-[400]'>We Code. Eat. Sleep. and Repeat.</p>
          </div>
        </div>

         <div className='flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5'>
            <div className='text-white text-3xl text-left xl:text-left' style={{ fontFamily: "poppins", fontWeight: 700 }}>
            <p className='text-white opacity-60 text-xs'>Passion</p>
            <h1>From pixels to purpose</h1>
            <h1><span className='text-blue-400'>we create</span> With <span className='text-red-400'> intent.</span></h1>
            <p style={{ fontFamily: "monospace" }} className='text-xs opacity-60 font-[400]'>Lines of code, miles of impact.</p>
          </div>

           <div className='w-full max-w-[340px] h-auto'>
            <img src={images.AYAN} className='w-full grayscale mt-6 h-auto object-cover rounded-md' alt="" />
            <h1 style={{ fontFamily: "monospace" }} className='text-white capitalize text-2xl mt-3'>Ayan Das</h1>
            <h1 style={{ fontFamily: "monospace" }} className='text-white text-xs opacity-60'>Frontend Developer...</h1>
          </div>

          <div className='w-full max-w-[380px]  h-auto'>
            <img src={images.AVIK} className='grayscale rounded-md w-full h-auto object-cover' alt="" />
            <h1 style={{ fontFamily: "monospace" }} className='text-white capitalize text-2xl mt-3'>Avik Bera</h1>
            <h1 style={{ fontFamily: "monospace" }} className='text-white text-xs opacity-60'>Backend Developer.....</h1>
          </div>
     </div>

     <div className='flex flex-col xl:flex-row mt-10 items-start xl:items-center justify-between gap-5'>
          <div className='w-full max-w-[300px]  h-auto'>
            <img src={images.BRISTI} className='grayscale rounded-md w-full h-auto object-cover' alt="" />
            <h1 style={{ fontFamily: "monospace" }} className='text-white capitalize text-2xl mt-3'>Bristi Denre</h1>
            <h1 style={{ fontFamily: "monospace" }} className='text-white text-xs opacity-60'>Developer....</h1>
          </div>

          <div className='w-full  max-w-[340px] h-auto'>
            <img src={images.AKASH} className='w-full grayscale  mt-6 h-auto object-cover rounded-md' alt="" />
            <h1 style={{ fontFamily: "monospace" }} className='text-white capitalize text-2xl mt-3'>Akash Maity</h1>
            <h1 style={{ fontFamily: "monospace" }} className='text-white text-xs opacity-60'>Developer...</h1>
          </div>

          <div className='text-white text-3xl text-left xl:text-right' style={{ fontFamily: "poppins", fontWeight: 700 }}>
            <p className='text-white opacity-60 text-xs'>Consistency</p>
            <h1>Technology is the canvas.</h1>
            <h1><span className='text-blue-400'>Creativity </span> is the <span className='text-red-400'> brush.</span></h1>
            <p style={{ fontFamily: "monospace" }} className='text-xs opacity-60 font-[400]'>Discipline in code. Precision in execution.</p>
          </div>
        

        </div>
        <div className='mt-10 py-3'>
          <h1 className='text-white flex items-center gap-5 text-8xl' style={{fontFamily: "poppins", fontWeight: 700}}>Team <span className='text-neutral-600'>Queue</span> <GrTechnology color={colors.white}/></h1>
          <p style={{fontFamily: 'futura'}} className='text-white text-lg opacity-60'>"Coming together is a beginning, staying together is progress, and working together is success."</p>
        </div>
       <div>
         <Cylinder/>
       </div>
       <div className='mt-1  py-5'>
          <h1 className='text-neutral-700 flex items-center gap-5 text-8xl' style={{fontFamily: "poppins", fontWeight: 700}} >Tech <span className='text-white'>Stack</span> <GrTechnology color={colors.white}/></h1>
          <p style={{fontFamily: 'futura'}} className='text-white text-xl opacity-60'>"The stack is just syntax. Creativity is the real language."</p>
        </div>

        <div>
          <TechStack/>
        </div>
       <div className='py-8 mt-3 ' >
          <h1 style={{fontFamily: "poppins"}} className='text-neutral-300 flex flex-col text-center font-black text-7xl'>Thank You... <span className='text-white opacity-60 font-[700]'>ありがとう</span></h1>
       </div>
      </div>
    </DashboardLayout>
  );
};

export default About;
