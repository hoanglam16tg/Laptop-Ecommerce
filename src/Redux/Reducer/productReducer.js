import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as React from 'react';
import axios from 'axios';

//------ API Laptop data-----
export const getApiDataLaptop = createAsyncThunk('task/getApiData', async () => {
  const res = await axios
    .get(`http://localhost:3001/Laptop`)
    .then((res) => {
      console.log('.then ~ res', res);
      return res;
    })
    .catch((err) => {
      console.log('err', err);
    });
  return res.data;
});

//------ API CPU data-----
export const getApiDataCPU = createAsyncThunk('task/getApiData', async () => {
  const res = await axios
    .get(`http://localhost:3001/CPU`)
    .then((res) => {
      console.log('.then ~ res', res);
      return res;
    })
    .catch((err) => {
      console.log('err', err);
    });
  return res.data;
});

//------ API Screens data-----
export const getApiDataScreen = createAsyncThunk('task/getApiData', async () => {
  const res = await axios
    .get(`http://localhost:3001/Screens`)
    .then((res) => {
      console.log('.then ~ res', res);
      return res;
    })
    .catch((err) => {
      console.log('err', err);
    });
  return res.data;
});

export const productReducer = createSlice({
  name: 'product',
  initialState: {
    listProductLaptop: [],
  },
  reducers: {
    setListProductLaptop: async (state, action) => {
      state.listProductLaptop = action.payload;
    },
  },
  extraReducers: {
    [getApiDataScreen.pending]: (state, action) => {},
    [getApiDataScreen.fulfilled]: (state, action) => {
      state.listProductLaptop = action.payload;
    },
    [getApiDataScreen.rejected]: (state, action) => {},
  },
});

export const { setListProductLaptop} = productReducer.actions;

export default productReducer.reducer;
