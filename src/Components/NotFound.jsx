// Components/NotFound.js
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook for navigation

const NotFound = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    // Main container with flexbox centering and styling
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white text-center px-4">
      {/* 404 Error Heading */}
      <h1 className="text-6xl font-bold text-orange-400 mb-4">404</h1>
      {/* Error message */}
      <p className="text-2xl mb-2 text-gray-700">Oops! Page not found.</p>
      {/* Additional description */}
      <p className="text-gray-500 mb-6">Looks like you took a wrong turn on the internet highway.</p>
      {/* Button to navigate back to home */}
      <button 
        onClick={() => navigate("/")} // Navigate to home page on click
        className="border-2 px-6 py-3 bg-orange-300 text-white rounded-full hover:bg-orange-400 hover:text-black transition-all duration-300">
        Take Me Home
      </button>
    </div>
  );
};

export default NotFound; // Export the NotFound component
