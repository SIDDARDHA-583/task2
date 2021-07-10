import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Boxesone.css'

const Boxesone = () => {
    return(
        <div className="boxes">
           <Grid container spacing={2}>
                <Grid item lg={6} xs={12} md={6}>
                    <div className="boxone">
                        <h3>LOREM IPSUM DOLOR SIT ULLAMCO LABORIS</h3>
                        <p>Excepteur sint occaecat cupdatat non deserunt mollit anim id est laborum proident, sunt in culpa</p>
                        <h5>LOREM IPSUM DOLOR</h5>
                    </div>
                    <div className="boxtwo">
                        <img src="3.jpg" alt="" className="box-image" />
                    </div>
                </Grid>
                <Grid item lg={6} xs={12} md={6}>
                    
                    <div className="boxtwo">
                        <img src="3.jpg" alt="" className="box-image" />
                    </div>
                    <div className="boxone">
                        <h3>LOREM IPSUM DOLOR SIT ULLAMCO LABORIS</h3>
                        <p>Excepteur sint occaecat cupdatat non deserunt mollit anim id est laborum proident, sunt in culpa</p>
                        <h5>LOREM IPSUM DOLOR</h5>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default Boxesone;