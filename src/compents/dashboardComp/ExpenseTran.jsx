import React from 'react';
import { colors } from '../../constant/color';
import TransactionItems from './TransactionItems';
import ExpenseTranItem from './ExpenseTranItem';
import NoDataFound from '../404/NoDataFound';

const ExpenseTran = ({ value = [], seeMore }) => {
  return (
    <div
     onClick={seeMore}
      /* style={{ backgroundColor: colors.matBlack }} */
      className="py-4 px-0  rounded-md"
    >
      <div className="flex  flex-col gap-4">
        {Array.isArray(value) && value.length > 0 ? (
          value.map((data, idx) => (
            <ExpenseTranItem key={idx} {...data} />
          ))
        ) : (
          <NoDataFound/>
        )}
      </div>

     
    </div>
  );
};

export default ExpenseTran;
