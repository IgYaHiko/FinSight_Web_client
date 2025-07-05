import React from 'react';

const Pointer = (props) => {
    const {text,style,font} = props
  return (
    <div className='z-20 flex-col items-center justify-center'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather text-white feather-mouse-pointer"
      >
        <path d="M3 3l7.5 18L13 13l8-3z" />
      </svg>
      <div style={{backgroundColor: style, fontFamily: "futura", color: font}} className=' py-1 px-3  font-black inline-flex rounded-bl-2xl rounded-tr-2xl  text-xs capitalize '>{text}</div>
    </div>
  );
};

export default Pointer;
