import React from "react";
import { Container } from "@material-ui/core";
import StopIcon from "@material-ui/icons/Stop";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import RecentData from "../recentData";

function LeftSideComp() {
  return (
    <Container>
      <div className="bg-white flex flex-col w-56 items-center  h-96 mt-10 rounded-md">
        <img
          className="z-40 rounded-t-md"
          src="https://media-exp1.licdn.com/dms/image/C4D16AQGZ3MQrAYX64w/profile-displaybackgroundimage-shrink_200_800/0/1643628246251?e=1649894400&v=beta&t=0mQ8Mc-D8EGbgvSctrXd2dV8wl8vO300YbZA1DfwSuI"
        />
        <img
          className="w-1/3 z-50 -m-9 rounded-full border-4 "
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGslzXk-NalwA/profile-displayphoto-shrink_100_100/0/1642481499356?e=1649894400&v=beta&t=J-Wz5l0srTSlC57IvF6WqcLUTBveRExMxZJSpi-in60"
        />
        <h1 className="mt-14">Sagar Borude</h1>
        <p className="text-xs text-center mt-2 px-3 font-light text-gray-700">
          {" "}
          Looking For Internship | React Js | Next Js | Node js | Angular | Full
          Stack
        </p>
        <hr className="border-gray-300 w-full mt-4" />
        <div className="flex justify-between items-center w-full p-2 hover:bg-gray-200 cursor-pointer">
          <p className="text-xs font-light text-gray-700">
            Who viewed your profile
          </p>
          <a className="text-blue-600 text-xs "> 44</a>
        </div>
        <div className="flex justify-between items-center w-full px-2 py-2 hover:bg-gray-200 cursor-pointer">
          <p className="text-xs font-light text-gray-700">Views of your post</p>
          <a className="text-blue-600 text-xs "> 283</a>
        </div>
        <hr className="border-gray-300 w-full " />
        <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
          <p className="text-xs font-light text-gray-700 text-left ">
            Access exclusive tools & insights
          </p>

          <p className="text-xs font-normal text-gray-900  leading-3 text-center ">
            {" "}
            <StopIcon className="text-yellow-500 " /> Get Hired Faster, Try
            Premimum Free
          </p>
        </div>

        <div className="border-t-2 w-full flex  items-center hover:bg-gray-200 h-full  hover:rounded-b-md cursor-pointer">
          <h1 className="text-sm text-left px-5 py-2 font-light">
            <BookmarkIcon className="text-gray-600 " /> My Item
          </h1>
        </div>
      </div>

      <div className="bg-white w-56 h-96 mt-2 rounded-md  ">
        <h1 className="p-3 text-sm">Recent</h1>
        {RecentData.map((items) => {
          return (
            <div className="hover:bg-gray-200 text-sm px-4 py-1">
              {" "}
              # {items.tag}{" "}
            </div>
          );
        })}
       <div className="flex flex-col mt-5 px-3 text-blue-400">
           <a>Groups</a>
           <a>Event</a>
           <a className="flex justify-between"><p> Followed Hashtags</p> <p className="text-2xl"> +</p> </a>



       </div>


      </div>

    </Container>
  );
}

export default LeftSideComp;
