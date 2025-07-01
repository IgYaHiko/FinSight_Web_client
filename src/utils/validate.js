import moment from 'moment';
// Validate if the email format is correct
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Validate password strength (at least 6 characters, one letter and one number)
export const validatePassword = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return regex.test(password);
};

export const formatAmount = (amount) => {
  if (typeof amount !== 'number') return '₹0';

  if (amount >= 1_000_000_000) {
    return `₹${(amount / 1_000_000_000).toFixed(1)}B`;
  } else if (amount >= 1_000_000) {
    return `₹${(amount / 1_000_000).toFixed(1)}M`;
  } else if (amount >= 1_000) {
    return `₹${(amount / 1_000).toFixed(1)}K`;
  } else {
    return `₹${amount}`;
  }
};


export const barChartData = (data=[]) => {
    const chartData =  data.map((i) => ({
        category: i?.category,
        amount: i?.amount
    }));
    return chartData;
}

export const incomeData = (data=[]) => {
    const newIncome =  data.map((i) => ({
        catagory: i?.catagory,
        amount: i?.amount
    }));
    return newIncome;
}


export const prepareDataIncome = (data = []) => {
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

  const newIncome = sortedData.map((i) => ({
    month: moment(i.date).format("MMM YYYY"),
    date: moment(i.date).format("DD MMM"), // New: formatted date
    category: i?.category || i?.catagory,
    amount: i?.amount,
  }));

  return newIncome;
};

export const prepareDataExpense = (data = []) => {
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

  const newIncome = sortedData.map((i) => ({
    month: moment(i.date).format("MMM YYYY"),
    date: moment(i.date).format("DD MMM"), // New: formatted date
    category: i?.category || i?.catagory,
    amount: i?.amount,
  }));

  return newIncome;
};

export const aboutData = [
   {
     title: "data",
     datas: "FinSight is a modern and intuitive personal finance management web application designed to help users take full control of their income and expenses. Whether you're tracking daily spending, analyzing income trends, or aiming for savings goals — FinSight empowers you to manage money with clarity and confidence."
     
   }
  ]