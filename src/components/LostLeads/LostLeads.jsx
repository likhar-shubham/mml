import React from 'react'
import { Box, Grid, Typography, Paper } from '@mui/material'

function filterLostLeadsData() {
    const localData = JSON.parse(localStorage.getItem('leadData'));
    const lostLeadData = {};
    const resultData = {};
    localData.forEach(ld => {
        if (ld.status === "Closed - Lost") {
            if (resultData.hasOwnProperty(ld.businessName)) {
                resultData[ld.businessName].leadID.push(ld.leadID);
                resultData[ld.businessName].deal += ld.deal;
            }
            else {
                lostLeadData["leadID"] = [ld.leadID];
                lostLeadData["deal"] = ld.deal;
                resultData[ld.businessName] = { ...lostLeadData };
            }
        }
    });
    return resultData;
}

function LostLeads(props) {
    const lostleadData = filterLostLeadsData();
    const lostleadDetails = Object.keys(lostleadData).map(lld => {
        return (
            <Grid item md={4} key={lostleadData[lld].leadID}>
                <Paper sx={{ backgroundColor: "#E0ECF8", p: 2, }} >
                    <Typography sx={{ color: "#000000", fontSize: 20 }}>{lld}</Typography>
                    <Typography sx={{ color: "#1976d2", fontSize: 18 }}>lead IDs : {lostleadData[lld].leadID.join(",")}</Typography>
                    <Typography sx={{ color: "#1976d2", fontSize: 18 }}>
                        Lost Deal Value : {lostleadData[lld].deal}
                    </Typography>
                </Paper>
            </Grid>
        );
    })
    return (
        <Box sx={{ ml: 25, mt: 10, height: "80vh" }}>
            <Grid container sx={{ m: 0 }} spacing={2}>
                {lostleadDetails}
            </Grid>
        </Box>
    )
}

LostLeads.propTypes = {}

export default LostLeads
