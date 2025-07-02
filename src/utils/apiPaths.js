
export const BASE_URL_SERVER = "https://finsight-web-server.onrender.com"

export const API_PATHS = {
      AUTH: {
         LOGIN: "/api/v1/auth/signin",
         REGISTER: "/api/v1/auth/register",
         GET_USER_INFO: "/api/v1/auth/getUser"
      },
      
      DASHBOARD: {
         GET_DATA: "/api/v1/dashboard/data"
      },
      INCOME: {
         ADDINCOME: "/api/v1/income/addincome",
         GET_ALL_INCOME: "/api/v1/income/getAll",
         DELETE_INCOME: (incomeId) => `/api/v1/income/${incomeId}`,
         DOWNLOAD_INCOME_XL_SHEET: "/api/v1/income/downloadXL"


      },
      EXPENSE: {
         ADD_EXPENSE: "/api/v1/expense/addExpense",
         GET_ALL_EXPENSE: "/api/v1/expense/getAllExpense",
         DELETE_EXPENSE: (expenseId) => `/api/v1/expense/${expenseId}`,
         DOWNLOAD_EXPENSE_XL_SHEET: "/api/v1/expense/downloadExpenseXL"
      },
      IMAGE: {
         UPLOAD_IMAGE: "/api/v1/auth/upload-image"
      },
      UPDATE: {
          UPDATE_IMAGE: "/api/v1/auth/update-image",
          UPDATE_PROFILE: "/api/v1/auth/update-profile"
      }
}
