import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'counter',
  initialState:{ 
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const {setChannelInfo} = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;

export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;