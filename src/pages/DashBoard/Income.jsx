import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../compents/layout/DashboardLayout';
import IncomeOverview from '../../compents/Income_components/IncomeOverview';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import Modal from '../../compents/modals/Modal';
import AddIncomeForm from '../../compents/Income_components/AddIncomeForm';
import toast from 'react-hot-toast';
import IncomeList from '../../compents/Income_components/IncomeList';
import { colors } from '../../constant/color';
import GeneralCusBtn from '../../compents/Inputs/GeneralCusBtn';
import { LuTrash2 } from 'react-icons/lu';

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openIncomeModal, setOpenIncomeModal] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null
  });

  const fetchIncomeData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(API_PATHS.INCOME.GET_ALL_INCOME);
      if (response.data) {
        const sorted = [...response.data].sort((a, b) => new Date(b.date) - new Date(a.date));
        setIncomeData(sorted);
      }
    } catch (error) {
      console.error("❌ Failed to fetch income data:", error?.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIncomeData();
  }, []);

  const handleAddIncome = async (income) => {
    const { catagory, amount, date } = income;
    if (!catagory) return toast.error("Category is needed");
    if (!amount || isNaN(amount) || Number(amount) <= 0)
      return toast.error("Amount must be a valid number > 0");
    if (!date) return toast.error("Date is required");

    try {
      await axiosInstance.post(API_PATHS.INCOME.ADDINCOME, {
        catagory,
        amount: Number(amount),
        date,
      });
      toast.success("Income added successfully ✅");
      setOpenIncomeModal(false);
      fetchIncomeData();
    } catch (error) {
      console.error("❌ Error adding income:", error?.response?.data || error.message);
      toast.error("Failed to add income. Please try again.");
    }
  };

  const handleDownloadData = async () => {
  try {
    const response = await axiosInstance.get(API_PATHS.INCOME.DOWNLOAD_INCOME_XL_SHEET, {
      responseType: 'blob', // tells axios to treat it as a file
    });

    // Create a blob URL
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'income-report.xlsx'); // filename
    document.body.appendChild(link);
    link.click();
    link.remove();
    toast.success("download successfully")
  } catch (error) {
    console.log("Failed to download the file", error?.response?.data?.message || error?.message);
    toast.error("Failed to download");
  }
};


  const handleDeleteClick = (item) => {
    setOpenDeleteAlert({ show: true, data: item });
  };

  const confirmDelete = async () => {
    const id = openDeleteAlert.data?._id;
    if (!id) return;

    try {
      await axiosInstance.delete(API_PATHS.INCOME.DELETE_INCOME(id));
      toast.success("Transaction deleted successfully");
      setOpenDeleteAlert({ show: false, data: null });
      fetchIncomeData();
    } catch (error) {
      console.error("Failed to delete:", error?.response?.data?.message || error?.message);
      toast.error("Failed to delete transaction");
    }
  };

  return (
    <DashboardLayout>
      <div className='bg-[#131313] px-5 py-4 rounded-md w-full grid md:grid-cols-1 gap-3'>
        <IncomeOverview
          addIncome={() => setOpenIncomeModal(true)}
          data={incomeData}
          loading={loading}
        />

        <Modal
          shorty="Seamless Tracking with FinSight"
          isOpen={openIncomeModal}
          onClose={() => setOpenIncomeModal(false)}
          title="Add Income"
        >
          <AddIncomeForm onSubmit={handleAddIncome} />
        </Modal>
      </div>

      <div className="mt-5 w-full grid md:grid-cols-1 gap-3">
        <div style={{ backgroundColor: "#131313" }} className="flex rounded-lg py-4 px-5 flex-col gap-4">
          <IncomeList
            onDownload={handleDownloadData}
            onDelete={handleDeleteClick}
            transaction={incomeData}
          />
        </div>
      </div>

      <Modal
        isOpen={openDeleteAlert.show}
        onClose={() => setOpenDeleteAlert({ show: false, data: null })}
        title="Delete Income"
        titleColor="text-red-400"
        shorty={
          openDeleteAlert.data
            ? `Are you sure you want to delete "${openDeleteAlert.data.catagory}" transaction?`
            : "Are you sure you want to delete this transaction?"
        }
      >
        <GeneralCusBtn
          lefttIcon={<LuTrash2 size={20} color={colors.white} />}
          name={"Delete Transaction"}
          onClick={confirmDelete}
          backgroundColors={colors.rose}
        />
      </Modal>
    </DashboardLayout>
  );
};

export default Income;
