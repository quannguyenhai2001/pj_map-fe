import instanceApi, { CallApiByParams } from "api/configApi";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {

};
export const fetchAsyncGetBill = createAsyncThunk(
    "bills/fetchAsyncGetBill",
    async (data, { rejectWithValue }) => {
        try {
            instanceApi.defaults.headers["Content-Type"] = "application/json; charset=UTF-8"
            const response = await CallApiByParams("bills/get-bill.php", "get", data)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

const SizeSlice = createSlice({
    name: 'bills',
    initialState,
    reducers: {


    },
    extraReducers: builder => {
    }
})

const { reducer: billReducer } = SizeSlice
export default billReducer
