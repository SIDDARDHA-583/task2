import React from 'react'
import './Graphs.css'
import Thirdgraph from './Thirdgraph';
import {Link , Switch, Route} from 'react-router-dom';
import Firstgraph from './Firstgraph';
import Secondgraph from './Secondgraph';

const Profile = () =>  <h2> View Profile </h2>;
const Conatct = () =>  <h2> My Contact </h2>;

const Graphs = () => {
    return(
        <div className="graphs">
             <div className="graphs-header">
                 <div className="graphs-new">
                 <Link to="/" className="graphs-title" style={{ color: 'inherit', textDecoration: 'inherit'}}><h3 style={{textDecoration:"none", color:"white", background:"black"}}>New Registration</h3></Link>
                 </div>
                 <div className="graphs-new">
                 <Link to="/user1" style={{ color: 'inherit', textDecoration: 'inherit'}}><h3 style={{textDecoration:"none", color:"white", background:"black"}}>Eiusmod Tempor</h3></Link>
                 </div>
                 <div className="graphs-new">
                 <Link to="/user2" style={{ color: 'inherit', textDecoration: 'inherit'}}><h3 style={{textDecoration:"none", color:"white", background:"black"}}>New Registration</h3></Link>
                 </div>
             </div>
             <div className="graph-data">
                 <Switch>
                     <Route exact path="/" component={Firstgraph} />
                     <Route exact path="/user1" component={Secondgraph} />
                     <Route exact path="/user2" component={Thirdgraph} />
                 </Switch>
             </div>
        </div>
    )
}
export default Graphs;