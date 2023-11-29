import billReducer from "redux/slices/BillSlice";




const { configureStore } = require("@reduxjs/toolkit");
const rootReducer = {
    bills: billReducer

}
const store = configureStore({
    reducer: rootReducer,
})
export default store