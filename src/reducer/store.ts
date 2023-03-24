import { korzina } from './korzina';
import { setsSlice } from './posti';
import { api } from './../../src/API';
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
  reducer: {
    sets: setsSlice.reducer,
    korzina:korzina.reducer,
    [api.reducerPath]:api.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch