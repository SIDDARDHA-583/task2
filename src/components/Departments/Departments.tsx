import { Container } from "@material-ui/core";
import React, { Component } from "react";
import Slider from "react-slick";
import './Departments.css'
import Grid from '@material-ui/core/Grid';

export default class Departments extends Component {
  render() {
    var setting = {
      
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
            breakpoint: 1300,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              
            }
          },
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              
            }
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="departments">
        <Container fixed>
        <h2> Departments </h2>
        <Slider {...setting}>
            <Grid container>
                <div className="container">
                    <div className="card">
                        <div className="imgbox">
                            <img src="airplane.png" alt="" style={{textAlign:"center"}}/>
                        </div>
                        <div className="content">
                            <h3 className="card-title">sed ut perspiciatis</h3>
                            <p className="card-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid container>
               <div className="container">
                    <div className="card">
                        <div className="imgbox">
                            <img src="antenna.png" alt="" />
                        </div>
                        <div className="content">
                            <h3 className="card-title">Excepteur sint occae</h3>
                            <p className="card-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid container>
               <div className="container">
                    <div className="card">
                        <div className="imgbox">
                            <img src="signal.png" alt="" />
                        </div>
                        <div className="content">
                            <h3 className="card-title">Eiusmod tempor</h3>
                            <p className="card-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid container>
                <div className="container">
                    <div className="card">
                        <div className="imgbox">
                            <img src="city.png" alt="" />
                        </div>
                        <div className="content">
                            <h3 className="card-title">Voluptatem quia volu</h3>
                            <p className="card-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid container>
               <div className="container">
                    <div className="card">
                        <div className="imgbox">
                            <img src="watch-tv.png" alt="" />
                        </div>
                        <div className="content">
                            <h3 className="card-title">Loluptate velit esse</h3>
                            <p className="card-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid container>
               <div className="container">
                    <div className="card">
                        <div className="imgbox">
                            <img src="workspace.png" alt="" />
                        </div>
                        <div className="content">
                            <h3 className="card-title">Loluptate velit esse</h3>
                            <p className="card-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid container>
                <div className="container">
                    <div className="card">
                        <div className="imgbox">
                            <img src="airplane.png" alt="" />
                        </div>
                        <div className="content">
                            <h3 className="card-title">Loluptate velit esse</h3>
                            <p className="card-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid container>
                <div className="container">
                    <div className="card">
                        <div className="imgbox">
                            <img src="antenna.png" alt="" />
                        </div>
                        <div className="content">
                            <h3 className="card-title">Loluptate velit esse</h3>
                            <p className="card-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid container>
                <div className="container">
                    <div className="card">
                        <div className="imgbox">
                            <img src="city.png" alt="" />
                        </div>
                        <div className="content">
                            <h3 className="card-title">Loluptate velit esse</h3>
                            <p className="card-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid container>
                <div className="container">
                    <div className="card">
                        <div className="imgbox">
                            <img src="signal.png" alt="" />
                        </div>
                        <div className="content">
                            <h3 className="card-title">Loluptate velit esse</h3>
                            <p className="card-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                        </div>
                    </div>
                </div>
            </Grid>
        </Slider>
        </Container>
      </div>
    );
  }
}