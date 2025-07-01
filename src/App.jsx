import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Auth/Welcome';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/DashBoard/Home';
import Income from './pages/DashBoard/Income';
import Expense from './pages/DashBoard/Expense';
import { AuthContext } from './context/AuthProvider';
import UserProvier from './context/useContext';
import Profile from './pages/DashBoard/Profile';
import {Toaster} from 'react-hot-toast'
import About from './pages/DashBoard/About';
const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
   /*  <UserProvier>  */
      <div className="w-full text-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={isAuthenticated ? '/home' : '/welcome'} />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/income" element={<PrivateRoute><Income /></PrivateRoute>} />
          <Route path="/expense" element={<PrivateRoute><Expense /></PrivateRoute>} />
          <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>} />
          <Route path='/about' element={<PrivateRoute> <About/> </PrivateRoute>}  />
        </Routes>
      </BrowserRouter>
     <Toaster
        toastOptions={{
           className: "",
           style: {
              fontSize: "13px"
           }

        }}
     />

    </div>
    /*  </UserProvier>  */
  );
};

export default App;

// ✅ PrivateRoute component
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/signin" />;
};
