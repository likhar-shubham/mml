import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


function StatusChart(props) {
  return (
    <Pie data={props.data} />
  )
}

StatusChart.propTypes = {}

export default StatusChart
