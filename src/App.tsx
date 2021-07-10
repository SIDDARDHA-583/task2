import React from 'react';
import './App.css';
import Carosels from './components/Carousels/Carosels';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Boxesone from './components/Boxesone/Boxesone';
import Tables from './components/Tables/Tables';
import Company from './components/Company/Company';
import Departments from './components/Departments/Departments';
import Balance from './components/Balance/Balance'
import Complaints from './components/Complaints/Complaints';
import Business from './components/Business/Business';
import Footers from './components/Footers/Footer';
import Graphs from './components/Graphs/Graphs';
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
  <HashRouter>
    <div className="app">
       <Container fixed>
           <Grid container spacing={0}>
              <Grid item lg={5} xs={12}>
                 <Carosels /> 
              </Grid>
              <Grid item lg={7} xs={12} md={12}>
                <Boxesone />
              </Grid>
           </Grid>
        </Container> 
        <Tables />    
        <Container fixed>
           <Grid container spacing={2}>
             <Grid item lg={4} xs={12}>
               <Company />
             </Grid>
             <Grid item lg={8} xs={12}>
               <Route path="/" component={Graphs} />
             </Grid>
           </Grid>
        </Container>   
        <Departments />  
        <Container fixed>
          <Grid container spacing={2}>
            <Grid item lg={8} xs={12}>
                <Complaints />
            </Grid>
            <Grid item lg={4} xs={12}>
              <Balance />
            </Grid>
            <Grid item lg={12}>
              <Business />
            </Grid>
          </Grid>
        </Container> 
        <Footers />                                                                
    </div>
    </HashRouter>
  );
}

export default App;
