import { configureStore } from '@reduxjs/toolkit';

import { taskTodo } from './services/todoService';
import { userApi } from './services/userService';

import authSlice from './slices/authSlice';

const Store = configureStore({
	reducer: {
		[taskTodo.reducerPath]: taskTodo.reducer,
		[userApi.reducerPath]:userApi.reducer,
		authSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(taskTodo.middleware).concat(userApi.middleware),
});

export default Store;
