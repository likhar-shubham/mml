import React from 'react'
import { Button } from '@mui/material'
import LeadDetailDialogBox from '../Common/LeadDetailDialogBox';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../store/reducers/leadDataSlice';
import { resetValues } from '../../store/reducers/textFieldSlice';
import { openDialog } from '../../store/reducers/dialogSlice';

function AddLead(props) {
    const leadDetailsData = useSelector((state) => state.text);
    const dialogActions = useSelector((state) => state.dialog);
    const localData = useSelector((state) => state.lead);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const leadID = localData.leadData ? localData.leadData.length + 1 : 1;
        const updatedLeadsDetailData = {
            ...leadDetailsData,
            leadID: leadID,
        }
        dispatch(updateData(updatedLeadsDetailData));
        dispatch(resetValues());
        dispatch(openDialog(false));
    }

    const handleClose = () => {
        dispatch(resetValues());
        dispatch(openDialog(false));
    }

    return (
        <>
            <Button variant="contained" onClick={() => dispatch(openDialog(true))}>Add Lead</Button>
            {!dialogActions.isView &&
                <LeadDetailDialogBox
                    open={dialogActions.open}
                    handleClose={handleClose}
                    handleSubmit={handleSubmit}
                />}
        </>
    )
}

AddLead.propTypes = {}

export default AddLead
