import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TextField from '@material-ui/core/TextField';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import TextsmsIcon from '@material-ui/icons/Textsms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';



function Header() {
  return <div className='bg-white flex flex-col sm:flex-row justify-between items-center rounded-sm shadow-md sm:px-14'>
 
 <div className='h-full flex flex-row sm:justify-center  items-center p-1 sm:space-x-0 space-x-20'>
    <LinkedInIcon  color='primary' style={{fontSize: 50}} />
    <TextField id="outlined-basic" label="Search" variant="outlined" size="small"  />

  

 </div>

 <div className='flex flex-row sm:space-x-6  space-x-4 '>
  

<div className='flex flex-col items-center '> 
 <HomeIcon style={{fontSize: 25}} />
 <p className='font-light text-sm border-black border-b-4'> Home</p>
 </div>

 <div className='flex flex-col items-center'> 
 <PeopleIcon style={{fontSize: 25}} />
 <p className='font-light text-sm'>Network</p>
 </div>


 <div className='flex flex-col items-center'> 
 <WorkIcon style={{fontSize: 25}} />
 <p className='font-light text-sm'>Jobs</p>
 </div> 

 <div className='flex flex-col items-center'> 
 <TextsmsIcon style={{fontSize: 25}} />
 <p className='font-light text-sm'>Messaging</p>
 </div> 

 <div className='flex flex-col items-center'> 
 <NotificationsIcon style={{fontSize: 25}} />
 <p className='font-light text-sm'>Notifications</p>
 </div> 

 <div className='flex flex-col items-center sm:border-r-2  sm:pr-2'> 
 <img  className='rounded-full h-7' src='https://media-exp1.licdn.com/dms/image/C4D03AQGslzXk-NalwA/profile-displayphoto-shrink_100_100/0/1642481499356?e=1649894400&v=beta&t=J-Wz5l0srTSlC57IvF6WqcLUTBveRExMxZJSpi-in60'  />
 <p className='font-light text-sm'>Me</p>
 </div> 


 <div className=' flex-col items-center hidden sm:inline-block'> 
 <AppsIcon style={{fontSize: 25}} />
 <p className='font-light text-sm'>Work</p>
 </div> 

 <div className='text-center '>
 <p className='font-light text-xs text-red-800  p-2 hidden sm:inline-block'>
    Get Hired Faster,
    <br/>
   Try Premimum Free
     </p>



 </div>









 </div>








  </div>;
}

export default Header;
