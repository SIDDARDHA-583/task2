import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Grid from '@material-ui/core/Grid';
import './Carosels.css';

class Carosels extends Component{
    render(){
        const settings = {
            dots : true,
            fade : true,
            infinite: true,
            speed : 1000,
            slidesToShow : 1,
            arrows : false,
            slidesToScroll : 1,
            autoplaySpeed : 3000,
            autoplay : true,
            
        }
        return(
            <div>
                <Grid className="slide">
                    <Grid item lg={12} sm={12} xs={12}>
                        <Slider {...settings}>
                            <div>
                                <div className="img-header">
                                    <img src="4.jpg" alt="" width="100%" className="image"/>
                                </div>
                                <div className="img-body">
                                    <h2>LOREM IPSUM DOLOR AMET ULLAM ULLAMCO LABORIS NISI</h2>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                    <button>LOREM IPSUM</button>
                                </div>
                            </div>
                            <div>
                                <div className="img-header">
                                    <img src="3.jpg" alt="" width="100%" className="image"/>
                                </div>
                                <div className="img-body">
                                    <h2>LOREM IPSUM DOLOR AMET ULLAM ULLAMCO LABORIS NISI</h2>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                    <button>LOREM IPSUM</button>
                                </div>
                            </div>
                            <div>
                                <div className="img-header">
                                    <img src="5.jpg" alt="" width="100%" className="image"/>
                                </div>
                                <div className="img-body">
                                    <h2>LOREM IPSUM DOLOR AMET ULLAM ULLAMCO LABORIS NISI</h2>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                    <button>LOREM IPSUM</button>
                                </div>
                            </div>
                        </Slider>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default Carosels;