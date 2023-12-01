import instanceApi, { CallApiByBody, CallApiByParams } from "api/configApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    userInfo: {},
    accessToken: ""
};

export const fetchAsyncSignIn = createAsyncThunk(
    "auth/fetchAsyncSignIn",
    async (data, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("user/login", "post", data)
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);

export const fetchAsyncGetUser = createAsyncThunk(
    "auth/fetchAsyncGetUser",
    async (_data, { rejectWithValue }) => {
        try {
            const response = await CallApiByBody("user/current", "get", null)
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);
export const fetchAsyncGetAllUsers = createAsyncThunk(
    "auth/fetchAsyncGetAllUsers",
    async (data, { rejectWithValue }) => {
        try {
            const response = await CallApiByParams("user", "get", data)
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);
export const fetchAsyncDeleteUsers = createAsyncThunk(
    "auth/fetchAsyncDeleteUsers",
    async (data, { rejectWithValue }) => {
        try {
            instanceApi.defaults.headers["Content-Type"] = "application/json; charset=UTF-8"
            const response = await CallApiByBody("auth/delete-user.php", "delete", data)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        deleteUser: (state, action) => {

            state.userInfo = {}
            state.accessToken = ""
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchAsyncSignIn.fulfilled, (state, action) => {
            state.userInfo = action.payload.userData;
            localStorage.setItem('access_token', action.payload.accessToken);
        })
        builder.addCase(fetchAsyncGetUser.fulfilled, (state, action) => {
            state.userInfo = action.payload.userData;
        })
    }
})

const { reducer: userReducer, actions } = userSlice
export const { deleteUser } = actions

export default userReducer
