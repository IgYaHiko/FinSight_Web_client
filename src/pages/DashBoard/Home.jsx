import React from 'react'
import DashboardLayout from '../../compents/layout/DashboardLayout'
import { colors } from '../../constant/color'
import userAuthContext from '../../hooks/useUserAuth';
import { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { useEffect } from 'react';
import InfoCard from '../../compents/dashboardComp/InfoCard';
import { FaGoogleWallet, FaWallet } from "react-icons/fa";
import { GiWallLight } from 'react-icons/gi';
import { LuAArrowDown, LuAArrowUp, LuArrowRight, LuTrendingDown, LuTrendingUp, LuWallet } from 'react-icons/lu';
import { BsCurrencyExchange } from "react-icons/bs";
import { MdCurrencyRupee } from "react-icons/md";
import { MdOutlineInsights } from "react-icons/md";
import { CgInsights } from "react-icons/cg";
import { PiArrowArcRight } from 'react-icons/pi';
import RecentTransaction from '../../compents/dashboardComp/RecentTransaction';
import { useNavigate } from 'react-router-dom';
import FinanceOverView from '../../compents/dashboardComp/FinanceOverView';
import { FaMoneyBillWave } from 'react-icons/fa';
import ExpenseTran from '../../compents/dashboardComp/ExpenseTran';

import ExpenseChart30 from '../../compents/dashboardComp/ExpenseChart30';
import IncomeComp from '../../compents/dashboardComp/IncomeComp';
import Last60Income from '../../compents/dashboardComp/Last60Income';

const Home = () => {
  
  userAuthContext();
  const navigate = useNavigate();
  const [dashBoardData,setDashBoardData] = useState(null);
  const [loading,setLoading] = useState(null);
  const fetchDashBoardData =  async () => {
     if(loading) return
     setLoading(true);

     try {
       const response = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);
       if(response.data) {
         setDashBoardData(response.data)
       }

     } catch (error) {
       console.log("Something wents wrong",error)
     }finally {
       setLoading(false)
     }
  }

  useEffect(() => {
     fetchDashBoardData();

     return () => {
       
     }
  },[])


  const onSeeMore = () => {
    console.log("fuckoff");
    navigate("/expense")
    
  }

  const onSeeMoreIncome = () => { 
     navigate("/income")
  }
  
  
  return (
   <DashboardLayout>
      <div className=' mx-auto'>
       <div className='bg-[#131313] rounded-md flex gap-4 flex-col px-5 pt-4 pb-5'>
       <div className='flex items-center gap-2'>
         <h1 style={{fontFamily: "poppins", fontWeight: 700}} className='text-xl text-white '> Insight</h1>
         <MdOutlineInsights color='pink' size={20} />
       </div> 
         <div className='grid  rounded-lg  grid-cols-1 md:grid-cols-3 gap-6'> 
         <InfoCard
           icon={<FaWallet size={20} />}
           title={"Total Balance"}
           value={dashBoardData?.totalBalance}
           color={colors.matBlack}
           loading={loading}
          />

          <InfoCard
           icon={<LuTrendingUp   size={20} color='white' />}
           title={"Total Income"}
           value={dashBoardData?.totalIncome}
           color={colors.matBlack}
           type={"Income"}
           loading={loading}
          />

          <InfoCard
           icon={<LuTrendingDown size={20} color='white' />}
           title={"Total Expense"}
           value={dashBoardData?.totalExpenses}
           color={colors.matBlack}
           type={"Expense"}
           loading={loading}
          />
        </div>
       </div>
      <div
  className="mt-5   w-full grid md:grid-cols-2 gap-3 "
 
>
  {/* Section 1: Header + Recent Transactions */}
  <div  style={{ backgroundColor: "#131313" }} className="flex rounded-lg py-4 px-5 flex-col gap-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h1
          style={{ fontFamily: "poppins", fontWeight: 700 }}
          className="text-xl text-white"
        >
          Recent Transactions
        </h1>
        <CgInsights color={colors.primary} size={20} />
      </div>
      <button
        onClick={onSeeMore}
        className="text-blue-800 bg-blue-200 rounded-md px-2 py-1 flex items-center gap-2 text-xs"
      >
        See all <LuArrowRight />
      </button>
    </div>

    <RecentTransaction
      value={dashBoardData?.recentTransaction}
      seeMore={onSeeMore}
    />
  </div>

  {/* Section 2: Another Component or Content */}
  <FinanceOverView
   totalBalance={dashBoardData?.totalBalance || 0}
   totalIncome={dashBoardData?.totalIncome || 0}
   totalExpenses={dashBoardData?.totalExpenses || 0}

  />
</div>

 <div
  className="mt-5   w-full grid md:grid-cols-2 gap-3 "
 
>
 {/* Section 3: another pie chart */}
  <ExpenseChart30 data={dashBoardData?.last30DaysExpenses?.transaction} />

  {/* Section 4: Expense tracker section*/}
  <div  style={{ backgroundColor: "#131313" }} className="flex rounded-lg py-4 px-5 flex-col gap-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h1
          style={{ fontFamily: "poppins", fontWeight: 700 }}
          className="text-xl text-white"
        >
          Expenses
        </h1>
        <FaMoneyBillWave color={colors.rose} size={20} />
      </div>
      <button
        onClick={onSeeMore}
        className="text-red-800 bg-red-200 rounded-md px-2 py-1 flex items-center gap-2 text-xs"
      >
        See all <LuArrowRight />
      </button>
    </div>

    <ExpenseTran
      value={dashBoardData?.last30DaysExpenses?.transaction || 0}
      seeMore={onSeeMore}
    />
  </div>

 
</div>

 <div
  className="mt-5   w-full grid md:grid-cols-2 gap-3 "
 
>
  {/* Section 1: Header + Recent Transactions */}
  <div  style={{ backgroundColor: "#131313" }} className="flex rounded-lg py-4 px-5 flex-col gap-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h1
          style={{ fontFamily: "poppins", fontWeight: 700 }}
          className="text-xl text-white"
        >
          Incomes
        </h1>
        <FaGoogleWallet color={"#16C47F"} size={20} />
      </div>
      <button
        onClick={onSeeMoreIncome}
        className="text-green-800 bg-green-200 rounded-md px-2 py-1 flex items-center gap-2 text-xs"
      >
        See all <LuArrowRight />
      </button>
    </div>

    <IncomeComp
      value={dashBoardData?.last60DaysIncomes?.transaction}
      seeMoreIncome={onSeeMoreIncome}
    />
  </div>

  {/* Section 2: Another Component or Content */}
   <Last60Income data={dashBoardData?.last60DaysIncomes?.transaction}  /> 
</div>


      </div>
   </DashboardLayout>
  )
}

export default Home