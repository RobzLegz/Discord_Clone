import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';
import appReducer from '../features/counter/userSlice';

export default configureStore({
  reducer: {
   user: userReducer,
   app: appReducer,
  },
});
