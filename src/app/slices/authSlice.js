import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		
		token:JSON.parse(localStorage.getItem('token')) || "" ,
	},
	
	reducers: {
		setToken: (state, action) => {
			state.user = action.payload.data.name
			state.token = action.payload.token;
			localStorage.setItem('token',JSON.stringify(action.payload.token))
			
			
		},
	},
});
export const { setToken } = authSlice.actions;
export default authSlice.reducer;
