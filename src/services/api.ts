import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Food from '../models/Food'
import { idText } from 'typescript'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Food, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Food[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Food[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Food[], void>({
      query: () => 'acao'
    }),
    getSportGames: builder.query<Food[], void>({
      query: () => 'esportes'
    }),
    getSimulationGames: builder.query<Food[], void>({
      query: () => 'simulacao'
    }),
    getFightGames: builder.query<Food[], void>({
      query: () => 'luta'
    }),
    getRpgGames: builder.query<Food[], void>({
      query: () => 'rpg'
    }),
    getGame: builder.query<Food, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetSoonQuery,
  useGetOnSaleQuery,
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetGameQuery
} = api

export default api
