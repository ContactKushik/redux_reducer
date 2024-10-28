import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    products:[],
};

export const ProductSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
       getProducts:(state,action)=>{
         axios.get("https://fakestoreapi.com/products").then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});
       } 
    }
})
export default ProductSlice.reducer;
export const {getProducts}=ProductSlice.actions;