import {Tovar } from './../API';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { store } from './store';

interface Korzina{
  tovar:Tovar[]
}

const initialState: Korzina={
  tovar: []
  }


export const korzina = createSlice({
  name: 'korzina',
  initialState,
  reducers: {
    addtovar: (state,action: PayloadAction<Tovar>) => {
      state.tovar.push(action.payload)
    },
    deletetovar: (state=initialState,action: PayloadAction<Tovar>) => {
      state.tovar.splice(state.tovar.findIndex(obj => obj.id === action.payload.id),1)
    },
  },
})

export const { addtovar,deletetovar } = korzina.actions



export default korzina.reducer