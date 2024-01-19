import { apiSlice } from "./apiSlice";

const QUIZ_URL = '/api/questions';

export const quizApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLanguageQuiz: builder.query({
            query: (language) => ({
                url: `${QUIZ_URL}/${language}`,
                method: "GET",
                credentials: 'include'
            })
        }),

    })
})

export const { useGetLanguageQuizQuery } = quizApiSlice;