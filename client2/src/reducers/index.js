import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import ProductReducer from "./ProductReducer";
import OrderReducer from "./OrderReducer";

// combineReducers  รวมกัน set กลับไปเป็น rootReducer
const rootReducer = combineReducers({
  // เวลามี action มาเข้าหมดเลย
  orders: OrderReducer,
  products: ProductReducer,
  form: reduxForm,
});

export default rootReducer;
