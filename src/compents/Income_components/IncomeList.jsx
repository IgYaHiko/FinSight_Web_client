import React from 'react';
import { FaDownload, FaWallet } from 'react-icons/fa';
import { colors } from '../../constant/color';
import IncomeListItems from './IncomeListItems';
import NoDataFound from '../404/NoDataFound';

const IncomeList = ({ transaction = [], onDownload, onDelete }) => {
  return (
    <div className='text-white'>
      <div className='flex items-center justify-between'>
        <h1 className='text-white text-1xl flex items-center gap-2' style={{ fontFamily: "futura", fontWeight: 700 }}>
          Income Source <FaWallet color={colors.newGreen} />
        </h1>
        <button
          onClick={onDownload}
          className='bg-green-200 flex items-center gap-2 px-2 py-1 rounded-lg text-xs text-green-900'
          style={{ fontFamily: "futura" }}
        >
          <FaDownload color={colors.matBlack} />
          Download
        </button>
      </div>

      <div className='mt-3 flex flex-col gap-4'>
        {Array.isArray(transaction) && transaction.length > 0 ? (
          transaction.map((item, idx) => (
            <IncomeListItems key={idx} {...item} onDelete={() => onDelete(item)} />
          ))
        ) : (
          <NoDataFound/>
        )}
      </div>
    </div>
  );
};

export default IncomeList;
