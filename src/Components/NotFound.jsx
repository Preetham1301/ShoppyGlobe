/* eslint-disable react/no-unescaped-entities */
// Components/NotFound.js
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-orange-50 to-white text-center px-4">
      {/* Big 404 Animation */}
      <motion.h1
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[120px] md:text-[150px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 drop-shadow-sm"
      >
        404
      </motion.h1>

      {/* Headline */}
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-2xl md:text-4xl font-semibold text-gray-800 mb-2"
      >
        Uh-oh. We lost that page.
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-md md:text-lg text-gray-500 max-w-xl mb-6"
      >
        <h4>The page you're looking for might have been moved, deleted, or never existed. Let's get you back on track.</h4>
      </motion.p>

      {/* Button */}
      <motion.button
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        onClick={() => navigate("/")}
        className="px-6 py-3 rounded-full text-white font-bold bg-orange-400 hover:bg-orange-500 hover:scale-105 transition-all duration-300 shadow-md"
      >
        🏠 Return Home
      </motion.button>
    </div>
  );
};

export default NotFound;
