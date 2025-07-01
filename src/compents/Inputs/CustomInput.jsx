import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const CustomInput = ({ placeHolder, onChange, value, styles, label, icons, type, rightIcons }) => {
  const [showPass, setShowPass] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword ? (showPass ? 'text' : 'password') : type;

  const TogglePass = () => setShowPass(!showPass);

  return (
    <div className="mt-4 space-y-1.5">
      {label && (
        <p className="text-white mb-3 text-sm" style={{ fontFamily: 'futura' }}>
          {label}
        </p>
      )}

      <div className="flex bg-[#101010] py-4 rounded-xl px-5 text-white items-center gap-2  focus-within:border-primary">
        {icons && <span className="text-lg">{icons}</span>}

        <input
          className="bg-transparent outline-none w-full placeholder-gray-500 text-white"
          type={inputType}
          
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
          style={styles}
        />

        {isPassword && (
          <span onClick={TogglePass} className="cursor-pointer text-xl text-gray-400">
            {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        )}

        {rightIcons && rightIcons}
      </div>
    </div>
  );
};

export default CustomInput;
