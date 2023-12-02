import instanceApi, { CallApiByBody, CallApiByParams } from "api/configApi";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {

};

export const fetchAsyncGetAllPost = createAsyncThunk(
    "post/fetchAsyncGetAllPost",
    async (data, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("product", "get", data)
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);
export const fetchAsyncCreatePost = createAsyncThunk(
    "post/fetchAsyncCreatePost",
    async (data, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("product", "post", data)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {


    },
    extraReducers: builder => {
    }
})

const { reducer: PostReducer } = PostsSlice
export default PostReducer
