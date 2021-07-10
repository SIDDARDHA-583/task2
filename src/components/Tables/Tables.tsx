import React from 'react'
import './Tables.css'
import { Container } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateRangeIcon from '@material-ui/icons/DateRange';

const Tables = () => {
    return(
        <div className="tables">
            <Container fixed>
                <div className="table-data">
                    <div className="header">
                        <h2>YOUR PROJECTS</h2>
                        <Button className="button">
                            <AddIcon />
                            ADD NEW PROJECT
                        </Button>
                    </div>
                    <Container fixed>
                    <Grid item lg={12}>
                    <div className="main-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>START DATE</th>
                                    <th>PROJECT NAME</th>
                                    <th>PROJECT DESCRIPTION</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="data">
                                    <DateRangeIcon style={{textAlign:"center", fontSize:"15px",color:"pink"}}/>
                                    12-janvary-2021
                                    </td>
                                    <td>Eiusmod tempor incididunt</td>
                                    <td>Eiusmod tempor incididunt Eiusmod tempor incididunt</td>
                                    <td className="success">ON TIME</td>
                                </tr>
                                <tr>
                                   <td className="data">
                                    <DateRangeIcon style={{textAlign:"center", fontSize:"15px",color:"pink"}}/>
                                    12-janvary-2021
                                    </td>
                                    <td>Eiusmod tempor incididunt</td>
                                    <td>Eiusmod tempor incididunt Eiusmod tempor incididunt</td>
                                    <td className="danger">ON TIME</td>
                                </tr>
                                <tr>
                                <td className="data">
                                    <DateRangeIcon style={{textAlign:"center", fontSize:"15px",color:"pink"}}/>
                                    12-janvary-2021
                                    </td>
                                    <td>Eiusmod tempor incididunt</td>
                                    <td>Eiusmod tempor incididunt Eiusmod tempor incididunt</td>
                                    <td className="success">ON TIME</td>
                                </tr>
                                <tr>
                                <td className="data">
                                    <DateRangeIcon style={{textAlign:"center", fontSize:"15px",color:"pink"}}/>
                                    12-janvary-2021
                                    </td>
                                    <td>Eiusmod tempor incididunt</td>
                                    <td>Eiusmod tempor incididunt Eiusmod tempor incididunt</td>
                                    <td className="danger">ON TIME</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </Grid>
                    </Container>
                </div>
                
            </Container>
        </div>
    )
}
export default Tables;