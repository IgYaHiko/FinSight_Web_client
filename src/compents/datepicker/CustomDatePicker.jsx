import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendarDateFill } from "react-icons/bs";

const CustomDatePicker = ({
  label = "Date",
  selected,
  onChange,
  placeholder = "Select a date",
}) => {
  return (
    <div className="mb-4 mt-4">
      {/* Label */}
      <label className="block text-white text-sm mb-2" style={{ fontFamily: "futura" }}>
        {label}
      </label>

      {/* Date Picker Container */}
      <div className="relative bg-[#101010] rounded-lg w-full">
        <DatePicker
          selected={selected}
          onChange={onChange}
          placeholderText={placeholder}
          dateFormat="yyyy-MM-dd"
          className=" bg-[#101010]  text-white py-4 px-5 pr-10 rounded-md"
        />

        {/* Calendar Icon */}
        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
          <BsCalendarDateFill size={18} color="#aaa" />
        </div>
      </div>
    </div>
  );
};

export default CustomDatePicker;
