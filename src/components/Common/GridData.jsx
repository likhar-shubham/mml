import React, { useEffect, useState, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "./GridData.css"
import { useDispatch, useSelector } from 'react-redux'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import LeadDetailDialogBox from './LeadDetailDialogBox';
import { getRowData, openDialog, setView } from '../../store/reducers/dialogSlice';
import { enableSubmitForView, resetValues } from '../../store/reducers/textFieldSlice';
import { updateRowData } from '../../store/reducers/leadDataSlice';

function findColumnDefs(leadData) {
    const keys = Object.keys(leadData);
    const colDefs = keys.map(key => {
        if (key.toLowerCase() === "leadid")
            return {
                field: key,
                width: 80,
                headerClass: "header-style",
                cellStyle: { color: "blue" }
            }
        else if (key.toLowerCase() === "enablesubmit")
            return { hide: true };
        return {
            field: key,
            headerClass: ["header-style", "header-style:hover"],
            width: 120
        }

    });
    colDefs["width"] = 40;
    return colDefs;
}

function GridData(props) {
    const leadData = useSelector((state) => state.lead.leadData);
    const coldata = useSelector((state) => state.text);
    const dialogActions = useSelector((state) => state.dialog);
    const filteredColDefs = leadData && findColumnDefs(coldata);
    const [columnDefs, setColumnDefs] = useState(filteredColDefs);
    const [rowData, setRowData] = useState(leadData);

    const dispatch = useDispatch();
    useEffect(() => {
        setRowData(leadData);
        if (dialogActions.isView) dispatch(enableSubmitForView(dialogActions.rowData));
        setColumnDefs(filteredColDefs);
    },
        [JSON.stringify(leadData), JSON.stringify(filteredColDefs), dialogActions.isView]);

    const handleCellClicked = e => {
        if (e.colDef.field === 'leadID') {
            dispatch(setView(true));
            dispatch(getRowData(e.data));
            dispatch(openDialog(true));
        }
    };

    const handleSubmit = e => {
        const updatedLeadDetailData = leadData.map(ob => {
            if (ob.leadID === dialogActions.rowData.leadID) {
                return { ...ob, deal: coldata.deal, status: coldata.status };
            }
            return ob;
        });

        dispatch(updateRowData(updatedLeadDetailData));
        dispatch(setView(false));
        dispatch(resetValues());
        dispatch(openDialog(false));
    };

    const handleClose = e => {
        dispatch(setView(false));
        dispatch(resetValues());
        dispatch(openDialog(false))
    };

    return (
        <div className="ag-theme-alpine" style={{ height: 300 }}>
            <AgGridReact
                onCellClicked={handleCellClicked}
                rowData={rowData}
                columnDefs={columnDefs}
            >
            </AgGridReact>
            {dialogActions.isView &&
                <LeadDetailDialogBox
                    open={dialogActions.open}
                    handleClose={handleClose}
                    handleSubmit={handleSubmit}
                />}
        </div>
    );
}
export default GridData;

GridData.propTypes = {}

