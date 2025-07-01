import React from 'react';

const CustomDropdown = ({
  title = "Select",
  value = "",
  onChange,
  options = {},
  showIcon = true,
  iconMap = {}
}) => {
  return (
    <>
      <label
        className="block text-white text-sm mb-2"
        style={{ fontFamily: 'futura' }}
      >
        {title}
      </label>

      <div className="relative  w-full mb-5">
        <select
          className="w-full bg-[#101010]  rounded-lg text-white py-4 px-5 appearance-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ fontFamily: 'futura' }}
        >
          <option value="" disabled>{title}</option>
          {Object.keys(options).map((key) => (
            <option key={key} value={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </option>
          ))}
        </select>

        {/* Optional icon preview */}
        {showIcon && value && iconMap[value] && (
          <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
            {iconMap[value]}
          </div>
        )}
      </div>
    </>
  );
};

export default CustomDropdown;
