import React from 'react';
import {Container}  from '@material-ui/core';

function LeftSideComp() {
  return <Container> 
   <div className='bg-white flex flex-col w-56 items-center r h-72 mt-10 rounded-md'>
  <img className='z-40 rounded-t-md' src='https://media-exp1.licdn.com/dms/image/C4D16AQGZ3MQrAYX64w/profile-displaybackgroundimage-shrink_200_800/0/1643628246251?e=1649894400&v=beta&t=0mQ8Mc-D8EGbgvSctrXd2dV8wl8vO300YbZA1DfwSuI'  />
  <img className='w-1/3 z-50 -m-9 rounded-full border-4 '  src='https://media-exp1.licdn.com/dms/image/C4D03AQGslzXk-NalwA/profile-displayphoto-shrink_100_100/0/1642481499356?e=1649894400&v=beta&t=J-Wz5l0srTSlC57IvF6WqcLUTBveRExMxZJSpi-in60' /> 
     <h1 className='mt-14'>Sagar Borude</h1> 
     <p className='text-xs text-center mt-2 px-3 font-light'> Looking For Internship | React Js | Next Js | Node js | Angular | Full Stack</p>  


        



     


  </div>

  </Container>;
}

export default LeftSideComp;
