import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {
        name: 'Shakil Ahmed',
        email: 'test@test.com'
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
})

export const { getData } = authSlice.actions;
export default authSlice.reducer;