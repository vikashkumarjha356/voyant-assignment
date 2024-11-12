import { createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (thunkAPI) => {
        const response = await fetch('https://mocki.io/v1/4ef9fde5-c17f-4b99-9cb5-0a14ed5db18a');
        const data = await response.json();
        return data;  // This will be the payload of the fulfilled action
    }
);

const initialState = {
    products: [],
    status: 'idle',  // Can be 'loading', 'succeeded', 'failed'
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;  // Assign fetched data to products
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;