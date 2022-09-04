import { configureStore } from "@reduxjs/toolkit";

import formIsValidSlice from "./formIsValidSlice";

const store = configureStore({
  reducer: {
    formISValidSlice: formIsValidSlice.reducer,
  },
});


export default store