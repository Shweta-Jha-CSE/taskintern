import React from 'react';
import web from '../src/images/img2.gif';
import Commom from './Commom';
const Home =() => {
  return(
    <div>
   <Commom 
   name="Grow Your Business with"
     imgsrc={web} 
     visit="/service"
     btname="Get Started" />
    </div>
  );
};

export default Home;