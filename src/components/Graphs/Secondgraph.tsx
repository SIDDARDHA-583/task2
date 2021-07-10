import React from 'react';
import { Bar } from 'react-chartjs-2';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import './Graphs.css'

const datalist = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
  datasets: [
    {
      
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'yellow'
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
};

const options = {
  indexAxis:'y',
  lengend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          
        },
      },
    ],
  },
};

const Secondgraph = () => (
  <div className="third">
    <div className='header'>
      <FormControl>
          <Select style={{marginLeft:"700px" , marginTop:"10px"}} value="2021">
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
          </Select>
      </FormControl>
    </div>
    <Bar type="bar" data={datalist} options={options} style={{}} />
  </div>
);

export default Secondgraph;