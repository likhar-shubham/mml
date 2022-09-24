import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    leadID: 0,
    date: "",
    businessName: "",
    businessCategory: "",
    leadSource: "",
    address: "",
    city: "",
    state: "",
    country: "",
    email: "",
    phoneNo: 0,
    website: "",
    status: "",
    deal: 0,
    enableSubmit: false
}

const textSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        setBusinessNameValue: (state, action) => {
            state.businessName = action.payload
        },
        setDateValue: (state, action) => {
            state.date = action.payload
        },
        setBusinessCategoryValue: (state, action) => {
            state.businessCategory = action.payload
        },
        setLeadSourceValue: (state, action) => {
            state.leadSource = action.payload
        },
        setAddressValue: (state, action) => {
            state.address = action.payload
        },
        setCityValue: (state, action) => {
            state.city = action.payload
        },
        setStateValue: (state, action) => {
            state.state = action.payload
        },
        setCountryValue: (state, action) => {
            state.country = action.payload
        },
        setEmailValue: (state, action) => {
            state.email = action.payload
        },
        setPhoneNoValue: (state, action) => {
            state.phoneNo = action.payload
        },
        setWebsiteValue: (state, action) => {
            state.website = action.payload
        },
        setStatusValue: (state, action) => {
            state.status = action.payload
        },
        setDealValue: (state, action) => {
            state.deal = +action.payload
        },
        resetValues: (state) => {
            state.date = "";
            state.businessName = "";
            state.businessCategory = "";
            state.leadSource = "";
            state.address = "";
            state.city = "";
            state.state = "";
            state.country = "";
            state.email = "";
            state.phoneNo = 0;
            state.website = "";
            state.status = "";
            state.deal = 0;
        },
        enableSubmitForAdd: state => {
            if (state.date === "" ||
                state.businessName === "" ||
                state.businessCategory === "" ||
                state.leadSource === "" ||
                state.address === "" ||
                state.city === "" ||
                state.state === "" ||
                state.country === "" ||
                state.email === "" ||
                state.phoneNo === 0 ||
                state.status === "" ||
                state.deal === 0)
                state.enableSubmit = false;
            else
                state.enableSubmit = true;
        },
        enableSubmitForView: (state, action) => {
            if (state.status === action.payload.status || state.deal === action.payload.deal)
                state.enableSubmit = false;
            else
                state.enableSubmit = true;
        },
    }
})

export default textSlice.reducer;
export const {
    setBusinessNameValue,
    setDateValue,
    setBusinessCategoryValue,
    setLeadSourceValue,
    setAddressValue,
    setCityValue,
    setStateValue,
    setCountryValue,
    setEmailValue,
    setPhoneNoValue,
    setWebsiteValue,
    setStatusValue,
    setDealValue,
    resetValues,
    enableSubmitForAdd,
    enableSubmitForView,
} = textSlice.actions;