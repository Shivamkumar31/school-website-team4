import { motion } from 'framer-motion';

function InfoCard({ title, icon, time, date }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-sky-100 rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer"
    >
      <motion.span
        className="text-4xl mb-2 inline-block"
        whileHover={{
          rotate: [0, -15, 15, -10, 10, 0],
          transition: { duration: 0.6, ease: 'easeInOut' },
        }}
      >
        {icon}
      </motion.span>
      <div className="text-lg font-semibold mb-1">{title}</div>
      {time && <div className="text-gray-700">{time}</div>}
      {date && <div className="text-sm text-gray-500">{date}</div>}
    </motion.div>
  );
}
 export default InfoCard;