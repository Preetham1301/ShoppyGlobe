# ShoppyGlobe

ShoppyGlobe is a modern, responsive e-commerce web application designed to deliver a seamless online shopping experience. Built with React.js, Redux, and React Router, it demonstrates best practices in component-based architecture, state management, API integration, and user-centric design.

---

## Features

- **Product Catalog**: Browse a wide range of products fetched from a public API.
- **Product Details**: View detailed information for each product.
- **Shopping Cart**: Add, update, or remove items; cart state persists during the session.
- **Search & Filter**: Instantly filter products by name.
- **Routing**: Effortless navigation between pages using React Router.
- **Error Handling**: Friendly error messages for API or navigation issues.
- **Responsive Design**: Optimized for all devices and screen sizes.

---

## Tech Stack

- **Frontend**: React.js, React Router
- **State Management**: Redux (actions, reducers, selectors)
- **Styling**: Tailwind CSS & custom CSS
- **API**: [dummyjson.com/products](https://dummyjson.com/products)

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── ProductList.jsx
│   ├── ProductItem.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   └── NotFound.jsx
├── redux/
│   ├── actions.js
│   ├── reducers.js
│   └── store.js
├── App.jsx
└── main.jsx
```

---

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Preetham1301/ShoppyGlobe.git
   cd ShoppyGlobe
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**

   Visit [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Live Demo

Access the deployed application at:  
[https://shoppy-globe-alpha.vercel.app/](https://shoppy-globe-alpha.vercel.app/)

---

## Acknowledgements

- Product data provided by [dummyjson.com](https://dummyjson.com/products)
- Built with [React](https://react.dev/), [Redux](https://redux.js.org/), and [Vite](https://vitejs.dev/)
- UI styled with [Tailwind CSS](https://tailwindcss.com/)
- Inspired by modern e-commerce best practices
