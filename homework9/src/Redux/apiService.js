import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:5000"
    }),
    endpoints:(builder)=>({
        getAllCourses:builder.query({
            query:()=>("/courses")
        }),
        getAllTeachers:builder.query({
            query:()=>("/teachers")
        }),
        createApplyInfo:builder.mutation({
            query:(payload) => ({
                url:'/form/apply',
                method:"POST",
                body:payload,
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        })
    })
})
export const {useGetAllCoursesQuery,useGetAllTeachersQuery,useCreateApplyInfoMutation} = api