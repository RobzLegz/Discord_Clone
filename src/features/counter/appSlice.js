import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'counter',
  initialState:{ 
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelId: (state, action) => {
      state.app += action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const {setChannelId} = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;