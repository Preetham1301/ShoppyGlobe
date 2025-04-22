/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { AddCartItem, RemoveCartItem, DeleteCartItem } from '../utilities/productSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ CartItems, index }) => {
  const dispatch = useDispatch();  

  return (
    <tr className="text-center border-b hover:bg-gray-50 transition duration-150">
      <td className="py-4 px-2 text-gray-700 font-semibold">{index + 1}. <span className="text-sm text-gray-500">({CartItems.quantity}x)</span></td>

      <td className="py-4 px-2">
        <img
          src={CartItems.images[0]}
          alt={CartItems.title}
          className="w-24 h-24 object-contain mx-auto rounded-lg shadow-sm"
        />
      </td>

      <td className="py-4 px-2 text-gray-700 font-medium">{CartItems.title}</td>

      <td className="py-4 px-2 text-green-600 font-bold">₹{CartItems.price.toFixed(2)}</td>

      <td className="py-4 px-2">
        <div className="flex justify-center gap-3">
          <button
            onClick={() => dispatch(DeleteCartItem(CartItems))}
            className="p-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-full transition"
            title="Delete"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            onClick={() => dispatch(AddCartItem(CartItems))}
            className="p-2 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-full transition"
            title="Add"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
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
