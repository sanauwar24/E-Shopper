import { combineReducers } from "@reduxjs/toolkit";

import MaincategoryReducer from "./MaincategoryReducer";
import SubcategoryReducer from "./SubcategoryReducer"
import ProductReducer from "./ProductReducer";
import BrandReducer from "./BrandReducer"
export default combineReducers({
    MaincategoryStateData: MaincategoryReducer,
    SubcategoryStateData: SubcategoryReducer,
    ProductStateData:ProductReducer,
    BrandStateData:BrandReducer,

})