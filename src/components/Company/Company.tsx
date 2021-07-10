import React from 'react';
import './Company.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Bar } from 'react-chartjs-2';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//       {
        
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
         
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
          
//         ],
//         borderWidth: 1,
//       },
//     ],
//     options: {
//     yAxes: [
//       {
//         name: 'A',
//         type: 'linear',
//         position: 'left',
//         scalePositionLeft: true
//       },
//       {
//         name: 'B',
//         type: 'linear',
//         position: 'right',
//         scalePositionLeft: false,
//         min: 0,
//         max: 1
//       }
//     ]
//   }
//   };

//   const options= {
//     scales: {
//       yAxes: 
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//     },
//   };

// const options: Highcharts.Options = {
//     chart:{
//         type: 'column',
//         renderTo: 'container'
//     },
//     series: [{
//         type : 'bar',
//         data: [1,2,3],
        
//     }
// ],
//     responsive: {  
//         rules: [{  
//           condition: {  
//             maxWidth: 100 
//           },  
//           chartOptions: {  
//             legend: {  
//               enabled: false  
//             }  
//           }  
//         }]  
//       }
// }
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
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
  };
  
  


const Company = () => {
    return(
        <div className="company">
            <div className="company-header">
                <h2>Company Header</h2>
            </div>
            <div className="company-body">
                <div className="card1">
                    <Accordion className="accordian1" style={{border:"1px solid black"}}>
                        <AccordionSummary  expandIcon={<ExpandMoreIcon className="arrow"/>} aria-controls="panel1a-content">
                            <small className="company-title">New Coustomers<span style={{paddingLeft:"40px"}}>3,897</span></small>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* <Bar type="line" data={data} /> */}
                            <Bar type='bar' data={data}  />
                            
                        </AccordionDetails>
                            <div style={{display:"flex",justifyContent:"space-between", padding:"0 20px"}}>
                                <p style={{color:"red", fontWeight:"bold"}}>3,897</p>
                                <div style={{color:"green", fontWeight:"bold",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                                    <p>+2.87</p>
                                    <p><ArrowUpwardIcon style={{}}/> </p></div>
                            </div>
                    </Accordion>
                </div>
                <div className="card1">
                    <Accordion className="accordian1" style={{border:"1px solid black"}}>
                        <AccordionSummary  expandIcon={<ExpandMoreIcon className="arrow"/>} aria-controls="panel1a-content">
                            <small className="company-title">Growth<span style={{paddingLeft:"112px"}}>9.27%</span></small>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* <Bar type="line" data={data} /> */}
                            <Bar type='bar' data={data}  />
                            
                        </AccordionDetails>
                            <div style={{display:"flex",justifyContent:"space-between", padding:"0 20px"}}>
                                <p style={{color:"red", fontWeight:"bold"}}>9.67%</p>
                                <div style={{color:"green", fontWeight:"bold",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                                    <p>+2.87</p>
                                    <p><ArrowUpwardIcon style={{}}/> </p></div>
                            </div>
                    </Accordion>
                </div>
                <div className="card1">
                    <Accordion className="accordian1" style={{border:"1px solid black"}}>
                        <AccordionSummary  expandIcon={<ExpandMoreIcon className="arrow"/>} aria-controls="panel1a-content">
                            <small className="company-title">New Orders<span style={{paddingLeft:"80px"}}>1,567</span></small>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* <Bar type="line" data={data} /> */}
                            <Bar type='bar' data={data}  />
                            
                        </AccordionDetails>
                            <div style={{display:"flex",justifyContent:"space-between", padding:"0 20px"}}>
                                <p style={{color:"red", fontWeight:"bold"}}>1,567</p>
                                <div style={{color:"green", fontWeight:"bold",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                                    <p>+2.87</p>
                                    <p><ArrowUpwardIcon style={{}}/> </p></div>
                            </div>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
export default Company;