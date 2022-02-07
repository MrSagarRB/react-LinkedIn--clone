import React from "react";
import { Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';

function Post() {
  return (
    <Container className="bg-white mt-10 rounded-md">
      <div className="flex justify-center items-center gap-3 py-3">
        <img
          className="w-14 rounded-full"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGslzXk-NalwA/profile-displayphoto-shrink_100_100/0/1642481499356?e=1649894400&v=beta&t=J-Wz5l0srTSlC57IvF6WqcLUTBveRExMxZJSpi-in60"
        />
        <TextField
          id="outlined-basic"
          label="Start Post"
          variant="outlined"
          size="medium"
          className="w-[400px]"
        />
      </div>
      <div className="flex gap-9 py-1">

        <div className="flex flex-row items-center hover:bg-slate-300 px-2 py-2 gap-1 rounded-sm">
          <AddPhotoAlternateIcon
            className="text-blue-500 "
            style={{ fontSize: 30 }}
          />{" "}
          <p className="text-sm text-gray-600">Photos</p>
        </div>

        <div className="flex flex-row items-center hover:bg-slate-300 px-2 py-2 gap-1 rounded-sm">
          <YouTubeIcon
            className="text-green-500 "
            style={{ fontSize: 30 }}
          />{" "}
          <p className="text-sm text-gray-600">Videos</p>
        </div>

        <div className="flex flex-row items-center hover:bg-slate-300 px-2 py-2 gap-1 rounded-sm">
          <EventAvailableIcon
            className="text-orange-100-500 "
            style={{ fontSize: 30 }}
          />{" "}
          <p className="text-sm text-gray-600">Event</p>
        </div>

        <div className="flex flex-row items-center hover:bg-slate-300 px-2 py-2 gap-1 rounded-sm">
          <VerticalSplitIcon
            className="text-red-500 "
            style={{ fontSize: 30 }}
          />{" "}
          <p className="text-sm text-gray-600">Artical</p>
        </div>


        
        


        



      </div>
    </Container>
  );
}

export default Post;
