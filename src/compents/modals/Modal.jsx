import React, { useEffect, useState } from 'react';
import { CgCross } from 'react-icons/cg';
import { FaCross } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { colors } from '../../constant/color';

const Modal = ({ isOpen, onClose, title,children,shorty,titleColor }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const modalStyle = {
    transform: showAnimation ? 'translateY(0)' : 'translateY(20px)',
    opacity: showAnimation ? 1 : 0,
    transition: 'all 0.3s ease-out',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className="bg-[#1e1e1e] rounded-xl w-[90%] max-w-2xl px-6 pt-5 pb-10 text-white relative shadow-lg"
        style={modalStyle}
      >
      <div className='flex justify-between mb-5 items-center' >
        <h1 className={`text-2xl ${titleColor}`} style={{fontFamily: "futura", fontWeight: 700}} >{title} <p className='text-xs font-extrabold opacity-50' style={{fontFamily: "monospace"}}>{shorty}</p></h1>
        <ImCross onClick={onClose} color={colors.rose} size={20} />
      </div>


        {/* Modal Content */}
        <div className="text-sm" style={{ fontFamily: "futura" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
