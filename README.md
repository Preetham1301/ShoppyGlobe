# ShoppyGlobe: E-commerce Application

ShoppyGlobe is a simple e-commerce app built with React.js. It showcases key React features like component-based architecture, state management using Redux, navigation with React Router, and API data fetching. The app is designed to be responsive, user-friendly, and functional.

---

## Key Features

- **Homepage**: Displays a list of products fetched from an API.
- **Product Details**: View detailed information about each product.
- **Shopping Cart**: Add, remove, or update items in the cart.
- **Search: Filter**: products dynamically by name.
- **Routing**: Smooth navigation between pages using React Router.
- **Error Handling**: Manages API request failures gracefully.
- **Responsive Design**: Optimized for all screen sizes.

---

## Tech Stack

- **Frontend**: React.js with React Router
- **State Management**: Redux (with actions, reducers, and selectors)
- **Styling**: CSS (with responsive design principles, both tailwind and external CSS used)
- **API**: Data fetched from [dummyjson.com](https://dummyjson.com/products)

---

## Project Structure

The application follows a modular and reusable component structure:

- `App`: Main entry point.
- `Header`: Contains navigation menu and shopping cart icon.
- `ProductList`: Displays the list of products.
- `ProductItem`: Represents a single product with an "Add to Cart" button.
- `ProductDetail`: Shows detailed information for a selected product.
- `Cart`: Displays cart items with options to modify quantities or remove items.
- `NotFound`: Displays a 404 error page for unknown routes.

---

## How to Run the Project

i-Node.js (v14 or later)
  npm or yarn

ii-Navigate into the project directory i.e cd ToDoProject

iii-Install the dependencies: i.e npm install
## or if using yarn
yarn


iv-To run the development server with Vite: i.e npm run dev