import React from 'react';
import { colors } from '../../constant/color';
import TransactionItems from './TransactionItems';
import IncomeItem from './IncomeItem';
import NoDataFound from '../404/NoDataFound';

const IncomeComp = ({ value = [], seeMoreIncome }) => {
  const renderData = value.slice(0,3);
  return (
    <div
     onClick={seeMoreIncome}
      /* style={{ backgroundColor: colors.matBlack }} */
      className="py-4 px-0  rounded-md"
    >
      <div className="flex flex-col gap-4">
        {Array.isArray(value) && renderData.length > 0 ? (
          renderData.map((data, idx) => (
            <IncomeItem key={idx} {...data} />
          ))
        ) : (
         <NoDataFound/>
        )}
      </div>

     
    </div>
  );
};

export default IncomeComp;
