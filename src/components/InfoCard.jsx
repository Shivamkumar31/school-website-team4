// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function InfoCard({ title, icon, time, date }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border border-gray-200 cursor-pointer"
    >
      <motion.span
        className="text-5xl mb-4"
        whileHover={{ rotate: [0, -15, 15, -10, 10, 0] }}
      >
        {icon}
      </motion.span>
      <div className="text-xl font-bold text-gray-800">{title}</div>
      {time && <div className="text-gray-600 text-lg mt-1">{time}</div>}
      {date && <div className="text-sm text-gray-500">{date}</div>}
    </motion.div>
  );
}

export default InfoCard;
