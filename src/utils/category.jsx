import { FaBolt, FaBriefcase, FaBus, FaQuestion, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { colors } from "../constant/color";
import { BsWallet } from "react-icons/bs";
import { GiTargetDummy } from "react-icons/gi";

export const CATEGORY_META = {
  food: { icon: <FaUtensils size={18}  color='white'/>, bg: '#FF6347' },        // 🍅 Tomato Red
  groceries: { icon: <FaShoppingCart color='white' size={18} />, bg: '#4B5563' }, // Gray
  transport: { icon: <FaBus size={18} color='white' />, bg: '#3B82F6' },        // Blue
  bills: { icon: <FaBolt size={18} color='white' />, bg: '#F59E0B' },           // Amber
  salary: { icon: <FaBriefcase size={18} color='white' />, bg: '#10B981' },     // Green
  other: { icon: <GiTargetDummy size={18} color='white' />, bg: '#6B7280' },
  freelancing: {icon:<SiFreelancer size={20} color='white' /> ,bg: colors.primary  },
  
     // Neutral
};