import React, { useState } from 'react';
import CustomInput from '../Inputs/CustomInput';
import GeneralCusBtn from '../Inputs/GeneralCusBtn';
import { BsCalendarDateFill } from "react-icons/bs";
import { CATEGORY_META } from '../../utils/category';
import { FaWallet } from 'react-icons/fa';
import CustomDropdown from '../dropdown/CustomDropdown';
import { colors } from '../../constant/color';
import CustomDatePicker from '../datepicker/CustomDatePicker';


const AddIncomeForm = ({ onSubmit }) => {
  const [income, setIncome] = useState({
    catagory: '',
    amount: '',
    date: '',
  });

  const handleChange = (key, value) => {
    setIncome({ ...income, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(income);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Category Dropdown */}
      <CustomDropdown
  title="Category"
  value={income.catagory} // ✅ Fix here too
  onChange={(val) => handleChange('catagory', val)} // ✅ Correct key
  options={CATEGORY_META}
  iconMap={Object.fromEntries(
    Object.entries(CATEGORY_META).map(([key, val]) => [key, val.icon])
  )}
/>


      {/* Amount Input */}
      <CustomInput
        type="number"
        placeHolder="Add Amount"
        value={income.amount}
        label="Amount"
        onChange={({ target }) => handleChange('amount', target.value)}
      />

      {/* Date Input */}

      <CustomDatePicker 
        label='Date'
        selected={income.date}
        onChange={(val) => handleChange("date", val)}

      />

      {/* Submit Button */}
      <GeneralCusBtn
        styles="mt-10"
        lefttIcon={<FaWallet />}
        name="Add Income"
        type="submit"
        backgroundColors={colors.newGreen}
      />
    </form>
  );
};

export default AddIncomeForm;
