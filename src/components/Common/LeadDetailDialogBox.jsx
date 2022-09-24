import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputField from './InputField';
import { Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
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
    enableSubmitForAdd,
    enableSubmitForView
} from '../../store/reducers/textFieldSlice';

const statusData = [
    { value: "Proposal", label: "Proposal" },
    { value: "Qualification", label: "Qualification" },
    { value: "Negotiating", label: "Negotiating" },
    { value: "Closed - Lost", label: "Closed - Lost" },
    { value: "Closed - Won", label: "Closed - Won" },
];



function LeadDetailDialogBox(props) {
    const leadDetailsData = useSelector((state) => state.text);
    const dialogActions = useSelector((state) => state.dialog);
    const rowData = dialogActions.rowData;
    const isView = dialogActions.isView;
    const enableSubmit = isView ? leadDetailsData.enableSubmit : undefined;
    const dispatch = useDispatch();
    dispatch(enableSubmitForAdd());

    useEffect(() => {
        if (isView) {
            dispatch(setBusinessNameValue(rowData.businessName));
            dispatch(setDateValue(rowData.date));
            dispatch(setBusinessCategoryValue(rowData.businessCategory));
            dispatch(setLeadSourceValue(rowData.leadSource));
            dispatch(setAddressValue(rowData.address));
            dispatch(setCityValue(rowData.city));
            dispatch(setStateValue(rowData.state));
            dispatch(setCountryValue(rowData.country));
            dispatch(setEmailValue(rowData.email));
            dispatch(setPhoneNoValue(rowData.phoneNo));
            dispatch(setWebsiteValue(rowData.website));
            dispatch(setStatusValue(rowData.status));
            dispatch(setDealValue(rowData.deal));
        }
    }, [JSON.stringify(rowData), isView, enableSubmit]);

    return (
        <>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    {isView &&
                        <Grid container spacing={2}>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Lead ID"
                                    disabled={isView}
                                    defaultValue={rowData.leadID}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Business Name"
                                    disabled={isView}
                                    defaultValue={leadDetailsData.businessName}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Date"
                                    defaultValue={leadDetailsData.date}
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Lead Source"
                                    defaultValue={leadDetailsData.leadSource}
                                    disabled={isView} />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Business Category"
                                    disabled={isView}
                                    defaultValue={leadDetailsData.businessCategory}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Address"
                                    defaultValue={leadDetailsData.address}
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Country"
                                    defaultValue={leadDetailsData.country}
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="State"
                                    defaultValue={leadDetailsData.state}
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="City"
                                    defaultValue={leadDetailsData.city}
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Email"
                                    defaultValue={leadDetailsData.email}
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Phone Number"
                                    defaultValue={leadDetailsData.phoneNo}
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Website"
                                    defaultValue={leadDetailsData.website}
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Status"
                                    defaultValue={leadDetailsData.status}
                                    required={leadDetailsData.status === "" ? true : false}
                                    error={leadDetailsData.status === "" ? true : false}
                                    value={leadDetailsData.status}
                                    onChange={(e) => dispatch(setStatusValue(e.target.value))}
                                    dropdownData={statusData}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Expected Deal"
                                    required={leadDetailsData.deal.length === 0 ? true : false}
                                    error={leadDetailsData.deal === 0 ? true : false}
                                    value={leadDetailsData.deal}
                                    defaultValue={leadDetailsData.deal}
                                    onChange={(e) => dispatch(setDealValue(e.target.value))}
                                    type={"number"}
                                />
                            </Grid>
                        </Grid>
                    }
                    {!isView &&
                        <Grid container spacing={2}>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Business Name"
                                    required={leadDetailsData.businessName === "" ? true : false}
                                    error={leadDetailsData.businessName === "" ? true : false}
                                    value={leadDetailsData.businessName}
                                    onChange={(e) => dispatch(setBusinessNameValue(e.target.value))}
                                />
                            </Grid>


                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Date"
                                    required={leadDetailsData.date === "" ? true : false}
                                    error={leadDetailsData.date === "" ? true : false}
                                    value={leadDetailsData.date}
                                    type={"date"}
                                    onChange={(e) => dispatch(setDateValue(e.target.value))}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Lead Source"
                                    required={leadDetailsData.leadSource === "" ? true : false}
                                    error={leadDetailsData.leadSource === "" ? true : false}
                                    value={leadDetailsData.leadSource}
                                    onChange={(e) => dispatch(setLeadSourceValue(e.target.value))}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Business Category"
                                    required={leadDetailsData.businessCategory === "" ? true : false}
                                    error={leadDetailsData.businessCategory === "" ? true : false}
                                    value={leadDetailsData.businessCategory}
                                    onChange={(e) => dispatch(setBusinessCategoryValue(e.target.value))}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Address"
                                    required={leadDetailsData.address === "" ? true : false}
                                    error={leadDetailsData.address === "" ? true : false}
                                    value={leadDetailsData.address}
                                    onChange={(e) => dispatch(setAddressValue(e.target.value))}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Country"
                                    required={leadDetailsData.country === "" ? true : false}
                                    error={leadDetailsData.country === "" ? true : false}
                                    value={leadDetailsData.country}
                                    onChange={(e) => dispatch(setCountryValue(e.target.value))}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="State"
                                    required={leadDetailsData.state === "" ? true : false}
                                    error={leadDetailsData.state === "" ? true : false}
                                    value={leadDetailsData.state}
                                    onChange={(e) => dispatch(setStateValue(e.target.value))}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="City"
                                    required={leadDetailsData.city === "" ? true : false}
                                    error={leadDetailsData.city === "" ? true : false}
                                    value={leadDetailsData.city}
                                    onChange={(e) => dispatch(setCityValue(e.target.value))}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Email"
                                    required={leadDetailsData.email === "" ? true : false}
                                    error={leadDetailsData.email === "" ? true : false}
                                    value={leadDetailsData.email}
                                    onChange={(e) => dispatch(setEmailValue(e.target.value))}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Phone Number"
                                    required={leadDetailsData.phoneNo < 1000000000 ? true : false}
                                    error={leadDetailsData.phoneNo < 1000000000 ? true : false}
                                    value={leadDetailsData.phoneNo}
                                    type="number"
                                    onChange={(e) => dispatch(setPhoneNoValue(e.target.value))}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Website"
                                    required={false}
                                    error={false}
                                    value={leadDetailsData.website}
                                    onChange={(e) => dispatch(setWebsiteValue(e.target.value))}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Status"
                                    required={leadDetailsData.status === "" ? true : false}
                                    error={leadDetailsData.status === "" ? true : false}
                                    value={leadDetailsData.status}
                                    onChange={(e) => dispatch(setStatusValue(e.target.value))}
                                    dropdownData={statusData}
                                />
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <InputField
                                    label="Expected Deal"
                                    required={leadDetailsData.deal.length === 0 ? true : false}
                                    error={leadDetailsData.deal === 0 ? true : false}
                                    value={leadDetailsData.deal}
                                    onChange={(e) => dispatch(setDealValue(e.target.value))}
                                    type={"number"}
                                />
                            </Grid>
                        </Grid>
                    }
                </DialogContent>
                <DialogActions>
                    <Button disabled={!leadDetailsData.enableSubmit} onClick={props.handleSubmit} autoFocus>
                        SUBMIT
                    </Button>
                    <Button onClick={props.handleClose} autoFocus>
                        CLOSE
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

LeadDetailDialogBox.propTypes = {
}

export default LeadDetailDialogBox
