import React from 'react';
import { colors } from '../../constant/color';
import TransactionItems from './TransactionItems';
import NoDataFound from '../404/NoDataFound';

const RecentTransaction = ({ value = [], seeMore }) => {
    const renderData = value.slice(0,5)
  return (
    <div
     onClick={seeMore}
      /* style={{ backgroundColor: colors.matBlack }} */
      className="py-4 px-0  rounded-md"
    >
      <div className="flex flex-col gap-4">
        {Array.isArray(value) && renderData.length > 0 ? (
          renderData.map((data, idx) => (
            <TransactionItems key={idx} {...data} />
          ))
        ) : (
          <NoDataFound/>
        )}
      </div>

     
    </div>
  );
};

export default RecentTransaction;
