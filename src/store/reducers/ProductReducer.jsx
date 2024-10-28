import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    products:[],
}

export const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducer:{},
})

export default ProductSlice.reducer;