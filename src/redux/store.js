import translateSlice from "./slices/translateSlice";
import languageSlice from "./slices/languageSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: { languageSlice, translateSlice },
});
