// Import the useNavigate hook from react-router-dom for navigation
import { useNavigate } from 'react-router-dom';

// NotFound component definition
const NotFound = () => {
  // Initialize the navigate function to programmatically change routes
  const navigate = useNavigate();

  return (
    // Main container with flexbox centering and styling
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white text-center px-4">
      {/* Large 404 heading */}
      <h1 className="text-6xl font-bold text-orange-400 mb-4">404</h1>
      {/* Subheading for error message */}
      <p className="text-2xl mb-2 text-gray-700">Oops! Page not found.</p>
      {/* Additional description */}
      <p className="text-gray-500 mb-6">Looks like you took a wrong turn on the internet highway.</p>
      {/* Button to navigate back to the home page */}
      <button 
        onClick={() => navigate("/")} // Navigate to home on click
        className="border-2 px-6 py-3 bg-orange-300 text-white rounded-full hover:bg-orange-400 hover:text-black transition-all duration-300"
      >
        Take Me Home
      </button>
    </div>
  );
};

// Export the NotFound component as default
export default NotFound;
