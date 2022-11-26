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
            query:()=>({
                headers:{
                    'Content-type':'application/json'
                },
                url:'/form/apply',
                method:"POST",
            })
        })
    })
})
export const {useGetAllCoursesQuery,useGetAllTeachersQuery,useCreateApplyInfoMutation} = api