/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux'; // Import hook to dispatch Redux actions
import { AddCartItem, RemoveCartItem, DeleteCartItem } from '../utilities/productSlice'; // Import action creators
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome icon component
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

// CartItem component receives CartItems (single cart item object) and index as props
const CartItem = ({ CartItems, index }) => {
  const dispatch = useDispatch(); // Get dispatch function from Redux

  return (
    // Table row for displaying cart item details
    <tr className="text-center border-b hover:bg-gray-50 transition duration-150">
      {/* Display item index and quantity */}
      <td className="py-4 px-2 text-gray-700 font-semibold">
        {index + 1}. <span className="text-sm text-gray-500">({CartItems.quantity}x)</span>
      </td>

      {/* Display product image */}
      <td className="py-4 px-2">
        <img
          src={CartItems.images[0]}
          alt={CartItems.title}
          className="w-24 h-24 object-contain mx-auto rounded-lg shadow-sm"
        />
      </td>

      {/* Display product title */}
      <td className="py-4 px-2 text-gray-700 font-medium">{CartItems.title}</td>

      {/* Display product price */}
      <td className="py-4 px-2 text-green-600 font-bold">
        ₹{CartItems.price.toFixed(2)}
      </td>

      {/* Action buttons: Delete, Add, Remove */}
      <td className="py-4 px-2">
        <div className="flex justify-center gap-3">
          {/* Delete item from cart */}
          <button
            onClick={() => dispatch(DeleteCartItem(CartItems))}
            className="p-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-full transition"
            title="Delete"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          {/* Increase item quantity */}
          <button
            onClick={() => dispatch(AddCartItem(CartItems))}
            className="p-2 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-full transition"
            title="Add"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          {/* Decrease item quantity */}
          <button
            onClick={() => dispatch(RemoveCartItem(CartItems))}
            className="p-2 bg-yellow-100 text-yellow-600 hover:bg-yellow-200 rounded-full transition"
            title="Remove"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
