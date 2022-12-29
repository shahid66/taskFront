import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const taskTodo = createApi({
	reducerPath: 'todo',
	tagTypes: ['task'],
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
		getTodo: builder.query({
			query: () => ({
				url: '/task',
				method: 'GET',
			}),
			providesTags: ['task'],
		}),
		createTodo: builder.mutation({
			query: (Todo) => ({
				
				url: '/task',
				method: 'POST',
				body: Todo,
			}),
			invalidatesTags: ['task'],
		}),
		updateTodo: builder.mutation({
			query: ({id,...rest}) => ({
				
				url: `/task/${id}`,
				method: 'PUT',
				body: rest,
			}),
			invalidatesTags: ['task'],
		}),
		deleteTodo: builder.mutation({
			query: (id) => ({
				url: `/task/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['task'],
		}),
		searchTodo: builder.query({
			query: (status) => ({
				url: `/taskStatus/${status}`,
				method: 'GET',
				
			}),
			providesTags: ['task'],
		}),
		searchTodoByMonth: builder.query({
			query: (month) => ({
				url: `/taskSearchByMonth/${month}`,
				method: 'GET',
				
			}),
			providesTags: ['task'],
		}),
		searchTodoByToday: builder.query({
			query: (day) => ({
				url: `/taskSearchByToday/${day}`,
				method: 'GET',
				
			}),
			providesTags: ['task'],
		}),
	
	}),
});
export const {
	useGetTodoQuery,
	useCreateTodoMutation,
	useUpdateTodoMutation,
	useDeleteTodoMutation,
	useSearchTodoQuery,
	useSearchTodoByMonthQuery,
	useSearchTodoByTodayQuery,
	
} = taskTodo;
