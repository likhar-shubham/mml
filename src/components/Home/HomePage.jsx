import React from 'react'
import { Box, Divider, Grid } from '@mui/material'
import GridData from '../Common/GridData'
import StatusChart from '../Common/StatusChart'
import OpportunitiesChart from '../Common/OpportunitiesChart'
import { useSelector } from 'react-redux'
import AddLead from './AddLead'

function filterDataForStatus(inputArr, typeOfChart) {
    const mapForStatus = {};
    const mapForOpportunity = {};
    inputArr && inputArr.forEach(ob => {
        mapForStatus[ob.status] = (mapForStatus[ob.status] || 0) + 1;
        mapForOpportunity[ob.status] = mapForOpportunity.hasOwnProperty(ob.status) ? mapForOpportunity[ob.status] + ob.deal : ob.deal;
    });

    const labelsForStatus = Object.keys(mapForStatus);
    const valuesForStatus = Object.values(mapForStatus);
    const labelsForOpportunity = Object.keys(mapForOpportunity);
    const valuesForOpportunity = Object.values(mapForOpportunity);

    const data = {
        dataForStatusChart:
        {
            labels: [...labelsForStatus],
            datasets: [
                {
                    label: 'Status',
                    data: [...valuesForStatus],
                    backgroundColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 255)',
                        'rgba(255, 159, 64)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        },

        dataForOpportunitiesChart:
        {
            labels: [...labelsForOpportunity],
            datasets: [
                {
                    label: "Deal",
                    data: [...valuesForOpportunity],
                    backgroundColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 255)',
                        'rgba(255, 159, 64)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                },
            ],
        }
    }

    return data;
}


function HomePage(props) {
    const leadData = useSelector((state) => state.lead.leadData);
    const filteredData = leadData && filterDataForStatus(leadData);
    return (
        <>
            {/* <Navbar /> */}
            <Box component="main" sx={{ ml: '15%', mt: '7%' }}>
                <Grid container spacing={2} sx={{ ml: '1%', mb: '1%' }}>
                    <AddLead />
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={2} md={7.5} >
                        <GridData leadData={leadData} />
                    </Grid>
                    {leadData
                        ? <Grid item xs={2} md={4.5} >
                            <StatusChart data={filteredData.dataForStatusChart} />
                        </Grid>
                        : null
                    }
                </Grid>
                <Divider />
                {leadData
                    ? <Grid container spacing={2}>
                        <Grid item xs={2} md={7.5} >
                            <OpportunitiesChart data={filteredData.dataForOpportunitiesChart} />
                        </Grid>
                    </Grid>
                    : null
                }
            </Box>
        </>
    )
}

HomePage.propTypes = {}

export default HomePage
