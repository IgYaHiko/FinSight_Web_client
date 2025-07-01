import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../compents/layout/DashboardLayout';
import ExpenseOverView from '../../compents/expense_comp/ExpenseOverView';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import Modal from '../../compents/modals/Modal';
import AddExpenseForm from '../../compents/expense_comp/AddExpenseForm';
import toast from 'react-hot-toast';
import ExpenseList from '../../compents/expense_comp/ExpenseList';
import GeneralCusBtn from '../../compents/Inputs/GeneralCusBtn';
import { colors } from '../../constant/color';
import { LuTrash2 } from 'react-icons/lu';

const Expense = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openExpenseModal, setOpenExpenseModal] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({ show: false, data: null });

  // Fetch all expenses
  const fetchExpenseData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(API_PATHS.EXPENSE.GET_ALL_EXPENSE);
      if (response.data) {
        const sorted = [...response.data]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map(item => ({ ...item, id: item._id })); // Ensure consistent id
        setExpenseData(sorted);
      }
    } catch (error) {
      console.error('Failed to fetch expenses:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenseData();
  }, []);

  // Handle new expense addition
  const handleAddExpense = async (expense) => {
    const { category, amount, date } = expense;

    if (!category) return toast.error('Category is required');
    if (!amount || isNaN(amount) || Number(amount) <= 0)
      return toast.error('Enter a valid amount greater than 0');
    if (!date) return toast.error('Date is required');

    try {
      await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, {
        category,
        amount: Number(amount),
        date,
      });
      toast.success('Expense successfully added');
      setOpenExpenseModal(false);
      fetchExpenseData();
    } catch (error) {
      console.error('Error adding expense:', error?.response?.data || error?.message);
      toast.error('Failed to add expense');
    }
  };

  // Trigger delete confirmation modal
  const handleDelete = (item) => {
    setOpenDeleteAlert({ show: true, data: item });
  };

  // Confirm delete action
  const confirmDelete = async () => {
    const id = openDeleteAlert.data?.id;
    if (!id) return;

    try {
      await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(id));
      toast.success('Deleted the transaction successfully');
      setOpenDeleteAlert({ show: false, data: null });
      fetchExpenseData();
    } catch (error) {
      console.error('Failed to delete the data:', error?.response?.data?.message || error?.message);
      toast.error('Failed to delete');
    }
  };

  const handleDownload = async () => {
  try {
    const response = await axiosInstance.get(API_PATHS.EXPENSE.DOWNLOAD_EXPENSE_XL_SHEET, {
      responseType: 'blob'
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute('download', 'expense_report.xlsx');
    document.body.appendChild(link);
    link.click();
    link.remove();

    toast.success("Download successful");
  } catch (error) {
    console.log("Failed to download", error?.response?.data?.message || error?.message);
    toast.error("Failed to download");
  }
};


  return (
    <DashboardLayout>
      {/* Overview and Add Expense Modal */}
      <div className="bg-[#131313] px-5 py-4 rounded-md w-full grid md:grid-cols-1 gap-3">
        <ExpenseOverView addExpense={() => setOpenExpenseModal(true)} data={expenseData} />
        <Modal
          title="Add Expense"
          shorty="Seamless track with FinSight"
          isOpen={openExpenseModal}
          onClose={() => setOpenExpenseModal(false)}
        >
          <AddExpenseForm onSubmit={handleAddExpense} />
        </Modal>
      </div>

      {/* Expense List */}
      <div className="mt-5 w-full grid md:grid-cols-1 gap-3">
        <ExpenseList
          transaction={expenseData}
          onDelete={handleDelete}
          onDownload={handleDownload}
        />
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={openDeleteAlert.show}
        onClose={() => setOpenDeleteAlert({ show: false, data: null })}
        title="Delete Expense"
        shorty="Are you sure you want to delete this transaction?"
        titleColor="text-red-400"
      >
        <GeneralCusBtn
          backgroundColors={colors.rose}
          lefttIcon={<LuTrash2 color={colors.white} />}
          name="Delete Transaction"
          onClick={confirmDelete}
        />
      </Modal>
    </DashboardLayout>
  );
};

export default Expense;
