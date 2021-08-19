import React from 'react';
import web from "../src/images/img3.gif";
import Commom from './Commom';
const About =() => {
  return(
    <div>
    <Commom name="Welcome to About page"
     imgsrc={web} 
     visit="/contact"
     btname="Contact Now" />

    </div>
  );
};

export default About;