// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function InfoCard({ title, icon, time, date }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.02,
        y: -2,
      }}
      whileTap={{ scale: 0.98 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl p-4 sm:p-6 flex flex-col items-center border border-gray-200 cursor-pointer transition-all duration-200 group"
    >
      <motion.span
        className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 filter drop-shadow-sm"
        whileHover={{
          rotate: [0, -15, 15, -10, 10, 0],
          scale: 1.1,
        }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.span>
      <motion.div
        className="text-lg sm:text-xl font-bold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.div>
      {time && (
        <motion.div
          className="text-gray-600 text-base sm:text-lg mt-1 sm:mt-2 font-medium text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {time}
        </motion.div>
      )}
      {date && (
        <motion.div
          className="text-xs sm:text-sm text-gray-500 mt-1 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {date}
        </motion.div>
      )}
    </motion.div>
  );
}

export default InfoCard;
