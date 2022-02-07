import React from "react";
import { Container } from "@material-ui/core";

function PostDisplay() {
  return (
    <Container className="bg-white mt-2 rounded-md py-3">
      <div className="flex">
          <img className="rounded-full w-14 border-white m-2" src="https://media-exp1.licdn.com/dms/image/C4E03AQGJaojx_wGc0A/profile-displayphoto-shrink_100_100/0/1623468755511?e=1649894400&v=beta&t=gKEavfE8mzgHttQOys2hWROfN-yGmiWcS87ExcIq-WE" />
            <div className=""> 

          <div className="flex justify-between"><h1 className=" ">Rohan Kulkarni </h1> <button className="hover:bg-slate-200 rounded-full px-2 py-1 font-semibold text-xl tracking-widest">...</button> </div> 
           <p className="text-xs font-light">Web Lead at GDSC-SITS | Learning Web-Development | Exploring Open Source </p>
           <p className="text-xs font-light">30m.</p>
           </div>
      </div>
    </Container>
  );
}

export default PostDisplay;
