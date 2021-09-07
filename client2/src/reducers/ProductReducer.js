import { PRODUCTS_FETCH } from "../actions/types";

export default function (state = [], action) {
  // ใช่ switch ในการเช็ค
  switch (action.type) {
    case PRODUCTS_FETCH:
      //ถ้าใช่ เอาค่าที่แนบมาไปเปลียงแปลง
      return action.payload;
    default:
      return state;
  }
}
