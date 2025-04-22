// Import the Outlet component from react-router-dom for nested routing
import { Outlet } from 'react-router-dom'
// Import the global CSS styles for the App component
import './App.css'
// Import the Header component to display at the top of the app
import Header from './Header'  

// The main App component that serves as the layout for the application
function App() {
  return (
    <>
      {/* Render the Header component at the top */}
      <Header/>
      {/* Render the matched child route component */}
      <Outlet/>
    </>
  )
}

// Export the App component as the default export
export default App
