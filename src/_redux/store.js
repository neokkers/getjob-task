import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});
