import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Business.css'
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Business = () => {
  return(
    <div className="business">
      <h2>Business Update</h2>
      <Carousel responsive={responsive}
       arrows
       infinite
       autoPlay
       keyBoardControl
       autoPlaySpeed={5000}
       containerClass="business-container"
       customLeftArrow={<ChevronLeftRoundedIcon className="left-arrow"/>}
       customRightArrow={<ChevronRightSharpIcon className="right-arrow"/>} 
       >
       <div className="business-padding">
          <Grid item lg={12}>
              <div className="business-card">
                <div className="business-image">
                    <img src="4.jpg" alt="" />
                </div>
                <div className="business-body">
                    <h3 className="business-title">Eiusmod tempor incididunt labo voluptatem quia voluptas</h3>
                    <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                    <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                    <button className="business-btn">Lorem Ipsum</button>
                  </div>
              </div>
            </Grid>
       </div>
       <div className="business-padding">
          <Grid item lg={12}>
              <div className="business-card">
                <div className="business-image">
                    <img src="4.jpg" alt="" />
                </div>
                <div className="business-body">
                    <h3 className="business-title">Eiusmod tempor incididunt labo voluptatem quia voluptas</h3>
                    <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                    <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                    <button className="business-btn">Lorem Ipsum</button>
                  </div>
              </div>
            </Grid>
       </div>
       <div className="business-padding">
          <Grid item lg={12}>
              <div className="business-card">
                <div className="business-image">
                    <img src="4.jpg" alt="" />
                </div>
                <div className="business-body">
                    <h3 className="business-title">Eiusmod tempor incididunt labo voluptatem quia voluptas</h3>
                    <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                    <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                    <button className="business-btn">Lorem Ipsum</button>
                  </div>
              </div>
            </Grid>
       </div>
       <div className="business-padding">
          <Grid item lg={12}>
              <div className="business-card">
                <div className="business-image">
                    <img src="4.jpg" alt="" />
                </div>
                <div className="business-body">
                    <h3 className="business-title">Eiusmod tempor incididunt labo voluptatem quia voluptas</h3>
                    <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                    <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
                    <button className="business-btn">Lorem Ipsum</button>
                  </div>
              </div>
            </Grid>
       </div>
     </Carousel>
    </div>
  )
}
export default Business;












































































































// import { Container } from "@material-ui/core";
// import React, { Component } from "react";
// import Slider from "react-slick";
// import Stepper from '@material-ui/core/Stepper';
// import './Business.css'
// import Grid from '@material-ui/core/Grid';

// export default class Business extends Component {
//   render() {
//     var settings = {
//       infinite: true,
//       speed: 500,
//       slidesToShow: 2,
//       slidesToScroll: 1,
//       initialSlide: 0,
//       responsive: [
//         {
//             breakpoint: 1300,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//               infinite: true,
//             }
//           },
//           {
//             breakpoint: 1250,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//               infinite: true,
//             }
//           },
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: true,
//           }
//         },
//         {
//           breakpoint: 800,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             initialSlide: 1
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
            
//           }
//         },
        
//       ]
//     };
//     return (
//       <div className="business">
//         <Container fixed>
//         <div className="business-header">
//             <h2>Business Updates</h2>
//             <p className="dots">.................................................................................................................................................................................</p>
//         </div>
//         <Slider {...settings}>
//             <Grid container>
//                 <div className="business-card">
//                    <div className="business-image">
//                        <img src="4.jpg" alt="" />
//                    </div>
//                     <div className="business-body">
//                         <h3 className="business-title">Eiusmod tempor incididunt labo voluptatem quia voluptas</h3>
//                         <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
//                         <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
//                         <button className="business-btn">Lorem Ipsum</button>
//                     </div>
//                 </div>
//             </Grid>
//             <Grid container>
//                 <div className="business-card">
//                    <div className="business-image">
//                        <img src="4.jpg" alt="" />
//                    </div>
//                     <div className="business-body">
//                         <h3 className="business-title">Eiusmod tempor incididunt labo voluptatem quia voluptas</h3>
//                         <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
//                         <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
//                         <button className="business-btn">Lorem Ipsum</button>
//                     </div>
//                 </div>
//             </Grid>
//             <Grid container>
//                 <div className="business-card">
//                    <div className="business-image">
//                        <img src="4.jpg" alt="" />
//                    </div>
//                     <div className="business-body">
//                         <h3 className="business-title">Eiusmod tempor incididunt labo voluptatem quia voluptas</h3>
//                         <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
//                         <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
//                         <button className="business-btn">Lorem Ipsum</button>
//                     </div>
//                 </div>
//             </Grid>
//             <Grid container>
//                 <div className="business-card">
//                    <div className="business-image">
//                        <img src="4.jpg" alt="" />
//                    </div>
//                     <div className="business-body">
//                         <h3 className="business-title">Eiusmod tempor incididunt labo voluptatem quia voluptas</h3>
//                         <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
//                         <p className="business-info">Lorem ipsum dolor amet consectetur adipiscing cupidatat proident</p>
//                         <button className="business-btn">Lorem Ipsum</button>
//                     </div>
//                 </div>
//             </Grid>
            
//         </Slider>
//         </Container>
//       </div>
//     );
//   }
// }