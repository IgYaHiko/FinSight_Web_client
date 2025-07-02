import React, { useState } from 'react';
import CustomInput from '../Inputs/CustomInput';
import GeneralCusBtn from '../Inputs/GeneralCusBtn';
import { BsCalendarDateFill } from "react-icons/bs";
import { CATEGORY_META } from '../../utils/category';
import { FaWallet } from 'react-icons/fa';
import CustomDropdown from '../dropdown/CustomDropdown';
import { colors } from '../../constant/color';
import CustomDatePicker from '../datepicker/CustomDatePicker';


const AddExpenseForm = ({ onSubmit }) => {
  const [income, setIncome] = useState({
    category: '',
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
  value={income.category} // ✅ Fix here too
  onChange={(val) => handleChange('category', val)} // ✅ Correct key
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
        name="Add Expense"
        backgroundColors={colors.rose}
        type="submit"
      />
    </form>
  );
};

export default AddExpenseForm;

