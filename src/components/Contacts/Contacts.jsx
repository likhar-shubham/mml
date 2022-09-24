import React from 'react'
import { Box, Grid, Typography, Paper, MenuItem } from '@mui/material'

function filterContactData() {
    const localData = JSON.parse(localStorage.getItem('leadData'));
    const compContactObj = {};
    localData.forEach(obj => {
        const contactObj = {};
        if (compContactObj.hasOwnProperty(obj.businessName)) {
            compContactObj[obj.businessName].phoneNo.push(obj.phoneNo);
            compContactObj[obj.businessName].email.push(obj.email);
        }
        else {
            contactObj["phoneNo"] = [obj.phoneNo];
            contactObj["email"] = [obj.email];
            compContactObj[obj.businessName] = { ...contactObj };
        }
    });
    return compContactObj;
}

function Contacts(props) {
    const contactDetailsData = filterContactData();
    const renderContactDetails = Object.keys(contactDetailsData).map(cdd => {
        return (
            <Grid item md={4} key={contactDetailsData[cdd].phoneNo}>
                <Paper sx={{ backgroundColor: "#E0ECF8", p: 2, }} >
                    <Typography sx={{ color: "#000000", fontSize: 20 }}>{cdd}</Typography>
                    <Typography sx={{ color: "#1976d2", fontSize: 18 }}>Phone Numbers</Typography>
                    {contactDetailsData[cdd].phoneNo.map(
                        pn =>
                            <MenuItem>
                                <Typography sx={{ color: "#395B64", fontSize: 15 }}>{pn}</Typography>
                            </MenuItem>
                    )}
                    <Typography sx={{ color: "#1976d2", fontSize: 18 }}>Emails</Typography>
                    {contactDetailsData[cdd].email.map(
                        em =>
                            <MenuItem >
                                <Typography sx={{ color: "#395B64", fontSize: 15 }} >{em}</Typography>
                            </MenuItem>
                    )}
                </Paper>
            </Grid>
        )
    });

    return (
        <Box sx={{ ml: 25, mt: 10, height: "80vh" }}>
            <Grid container sx={{ m: 0 }} spacing={2}>
                {renderContactDetails}
            </Grid>
        </Box>
    )
}

Contacts.propTypes = {}

export default Contacts
