import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../utilities/productSlice.js"

const AppStore = configureStore ({
    reducer : {
        Products : ProductReducer
    }
})

export default AppStore