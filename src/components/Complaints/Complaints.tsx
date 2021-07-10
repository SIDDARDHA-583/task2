import React from "react";
import './Complaints.css'
import { Doughnut } from "react-chartjs-2";
import Grid from '@material-ui/core/Grid';


const datas = {
    
    datasets: [
      {
        data: [15, 20, 60],
        backgroundColor:  [
        'skyblue',
        'lime',
        'Yellow',
        
        ],
        borderColor: [
            'grey'
          ],
          borderWidth: 1,
      }
    ]
}

const Complaints = () => {
    return(
        <div className="complaints">
            <h3>Complaints Overview</h3>
            <div className="complaints-data">
            <Grid container spacing={0}>
                <Grid>
                    <div className="doughnut-graph">
                        <Doughnut type="doughnut" data={datas} style={{width:"100%", height:"100%",marginBottom:"20px",marginLeft:"10px"}}/>
                    </div>
                </Grid>
                <Grid>
                    <div className="line">
                        
                    </div>
                </Grid>
                <Grid>
                <div className="complaints-boxes">
                    <div className="complaints-box1">
                        <p>Open</p>
                        <p style={{marginLeft:"100px",fontWeight:"bold"}}>60</p>
                    </div>
                    <div className="complaints-box2">
                        <p>Closed</p>
                        <p style={{marginLeft:"100px",fontWeight:"bold"}}>15</p>
                    </div>
                    <div className="complaints-box3">
                        <p>In Progress</p>
                        <p style={{marginLeft:"100px",fontWeight:"bold"}}>20</p>
                    </div>
                </div>
                </Grid>
            </Grid>
                
            </div>
        </div>
    )
}
export default Complaints;