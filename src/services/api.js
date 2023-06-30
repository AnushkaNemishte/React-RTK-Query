import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3001/"
    }),
    tagTypes:["Users"],
    endpoints:(builder)=>({
        getUser:builder.query({
            query:()=>({
                url:"users",
                method:'GET',
                providesTags: ['Users']
            })
        }),
        getUserById:builder.query({
            query:(id)=>({
                url:`users/${id}`,
                method:'GET'
            })
        }),
        addUser:builder.mutation({
            query:(newPost)=>({
                url:`users`,
                method:"POST",
                body:newPost
            }),
            invalidatesTags:["Users"]
        }),
        updateUser:builder.mutation({
            query:(updateUser)=>({
                url:`users/${updateUser.id}`,
                method:"PUT",
                body:updateUser
            })
        }),
        deleteUser:builder.mutation({
            query:(id)=>({
                url:`users/${id}`,
                method:"DELETE"
            })
        })
    })
})

export const {useGetUserQuery,useAddUserMutation,useGetUserByIdQuery,useUpdateUserMutation,useDeleteUserMutation}=api