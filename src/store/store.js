import { configureStore } from "@reduxjs/toolkit";
import leadDataReducer from "./reducers/leadDataSlice";
import textFieldReducer from "./reducers/textFieldSlice";
import dialogReducer from "./reducers/dialogSlice";

const store = configureStore({
    reducer: {
        lead: leadDataReducer,
        text: textFieldReducer,
        dialog: dialogReducer,
    },
});

export default store;