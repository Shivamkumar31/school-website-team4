// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function InfoCard({ title, icon, time, date }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{
        scale: 1.01,
        y: -1,
      }}
      whileTap={{ scale: 0.99 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl p-4 sm:p-6 flex flex-col items-center border border-gray-200 cursor-pointer transition-all duration-200 group"
    >
      <motion.span
        className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 filter drop-shadow-sm"
        whileHover={{
          rotate: [0, -5, 5, 0],
          scale: 1.05,
        }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.span>
      <div className="text-lg sm:text-xl font-bold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </div>
      {time && (
        <div className="text-gray-600 text-base sm:text-lg mt-1 sm:mt-2 font-medium text-center">
          {time}
        </div>
      )}
      {date && (
        <div className="text-xs sm:text-sm text-gray-500 mt-1 text-center">
          {date}
        </div>
      )}
    </motion.div>
  );
}

export default InfoCard;
