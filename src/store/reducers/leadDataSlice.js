import { createSlice } from '@reduxjs/toolkit';

const localData = JSON.parse(localStorage.getItem('leadData'));
const initialState = {
    leadData: localData && [
        ...localData,
    ],
}

const leadDataSlice = createSlice({
    name: 'lead',
    initialState,
    reducers: {

        updateData: (state, action) => {
            const updatedLeadData = state.leadData ? [...state.leadData, action.payload] : [action.payload];
            localStorage.setItem('leadData', JSON.stringify(updatedLeadData));
            return {
                ...state,
                leadData: updatedLeadData,
            }
        },
        updateRowData: (state, action) => {
            const leadData = [...action.payload];
            localStorage.setItem('leadData', JSON.stringify(leadData));
            return {
                leadData: leadData,
            }
        }
    }
});

export default leadDataSlice.reducer;
export const { updateData, updateRowData } = leadDataSlice.actions;