import deatils from './pages/deatils';
import './App.css'
import React from 'react'
import { Animated, } from "react-animated-css";
import styled from "styled-components"
import image from '../src/img/mgn93zea.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Image = styled.img`
width:40%;
height:50%;
color: "red"

` 

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
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
<Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;


function App() {
  return (

    <>


      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        
        <div>
          <h1 style={{ color: "purple", margin: "3rem" }}>Zizipho Magugwana</h1>

        </div>

      </Animated>
  


      <div className="wrapper">
  
      <Image src={image}/>
  

        <h1>About Me </h1>
        <p>I am looking for a challenging position where I can contribute to an exciting project and apply and develop my skills. I write well, am both numerate and technologically savvy, and an effective communicator.
          All of my experience has involved high levels of working with teams, multitasking,
          time management, and responding efficiently to the needs of the company and clients.
          I like working on challenging projects which is why I enjoy
          working dedicatedly on every assignment given to me.
          Additionally i can also work well with databases including
          PostgreSQL and MongoDB. I am always diligent,conscientious and i
          never miss a deadline. Whilst caring duties i am always
          competent and proficient.I am always solution-oriented whilst
          dealing with challenges and problem. I am detailed oriented
          person who can be relied upon to adhere to all company policies
          and procedures</p>
        <button onClick={{ deatils }} >go somewhere</button>




      </div>



    </>
  );




}




export default App
