import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    open: false,
    rowData: {},
    isView: false,
}

const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        openDialog: (state, action) => {
            return {
                ...state,
                open: action.payload
            }
        },
        getRowData: (state, action) => {
            return {
                ...state,
                rowData: { ...action.payload },
            }
        },
        setView: (state, action) => {
            return {
                ...state,
                isView: action.payload,
            }
        },
    }
});

export default dialogSlice.reducer;
export const { openDialog, getRowData, setView } = dialogSlice.actions;


