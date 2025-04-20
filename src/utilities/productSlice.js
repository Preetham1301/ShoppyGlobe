import { createSlice } from "@reduxjs/toolkit"
import { toast , ToastContainer , Slide } from "react-toastify"


const initialState = {
    fullItems : [],
    items: [],

}

const productSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {
        SetFullData : (state, action) => {
            state.fullItems = action.payload
        },

        AddCartItem: (state, action) => {

            const itemId = state.items.find((item) => item.id === action.payload.id)

            const data = { ...action.payload, quantity: 1 }

            if (!itemId) {
                state.items.push(data)
                toast.success ("Item added to Cart")
            } else if (itemId.minimumOrderQuantity > 0) {
                itemId.quantity++
                itemId.minimumOrderQuantity--
                toast(" product added to cart")
               
            }else if (itemId.minimumOrderQuantity ===  0) {
                toast("Out of Stock")
            }

        },

        RemoveCartItem: (state, action) => {
            const itemId = state.items.find((item) => item.id === action.payload.id)

            if (itemId.quantity <= 1) {    
                state.items = state.items.filter((item) => item.id != itemId.id)
            } else {
                itemId.quantity--
                itemId.minimumOrderQuantity++
                toast(" product qty reduced")
            }
        },

        DeleteCartItem : (state , action) => {
            const itemId = state.items.find((item) => item.id === action.payload.id)
            state.items = state.items.filter((item) => item.id != itemId.id)
            toast.success("Product removed from cart")
        },

        clearCartItem : (state , action) => {
            
            state.items.length = 0
            toast.success ("Checkout Success")
           
        }
    }
})

export const { SetFullData , AddCartItem, RemoveCartItem ,DeleteCartItem , clearCartItem } = productSlice.actions;


export default productSlice.reducer

