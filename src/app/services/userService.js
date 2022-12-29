import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
	reducerPath: 'user',
	tagTypes: ['user'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:5000/api/v1',
		prepareHeaders: (headers, { getState }) => {
			const {
				authSlice: { token },
			} = getState();
			console.log('states: ', token);
			headers.set('authorization', token ? token : '');
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getUser: builder.query({
			query: () => ({
				url: '/user',
				method: 'GET',
			}),
			providesTags: ['user'],
		}),
		createUser: builder.mutation({
			query: (user) => ({
				headers: {
					'Content-type': 'application/json',
				},
				url: '/register',
				method: 'POST',
				body: user,
			}),
			invalidatesTags: ['user'],
		}),
		updateUser: builder.mutation({
			query: (user) => ({
				headers: {
					'Content-type': 'application/json',
				},
				url: '/user',
				method: 'PUT',
				body: user,
			}),
			invalidatesTags: ['user'],
		}),
		deleteUser: builder.mutation({
			query: (id) => ({
				url: `user/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['user'],
		}),
		userLogin: builder.mutation({
			query: (userData) => ({
				headers: {
					'Content-type': 'application/json',
				},
				url: '/login',
				method: 'POST',
				body: userData,
			}),
		}),
	}),
});
export const {
	useGetUserQuery,
	useCreateUserMutation,
	useUpdateUserMutation,
	useDeleteUserMutation,
	useUserLoginMutation,
} = userApi;
