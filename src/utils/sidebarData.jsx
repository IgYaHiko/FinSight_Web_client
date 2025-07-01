import { IoIosLogOut } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FaGoogleWallet } from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserCircle } from 'react-icons/fa';


export const SIDE_BAR_DATA = [
    {
        id: "01",
        label: "Dashboard",
        icon: <MdSpaceDashboard  size={20} />,
 
        path: "/home",
   },
    { 
        id: "02",
        label: "Income",
        icon: <FaGoogleWallet size={20} />,
        path: "/income"
    
    },
    {
        id: "03",
        label: "Expense",
        icon: <GiExpense size={20}/>,
        path: "/expense",
    },
    {
        id: "04",
        label: "Profile",
        icon: <PiFinnTheHumanFill size={20}/>,
        path: "/profile",
    },
    {
        id: "05",
        label: "About",
        icon: <FaUserCircle size={20}/>,
        path: "/about"
    },
    {
        id: "06",
        label: "Logout",
        icon: <IoIosLogOut size={20}/>,
        path: "logout"
    }
]