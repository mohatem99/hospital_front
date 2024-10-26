import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import patientSlice from "./reducers/patientSlice";
import queueSlice from "./reducers/queueSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    patient: patientSlice,
    queue: queueSlice,
  },
});

export default store;
