// Reference: https://github.com/jdiabi/react-profile-card/tree/master

import React from "react";
import "./ProfileCard.scss";
import avatar from "../assets/images/profile.png"
import { Box } from "@mui/material";

function ProfileCard(props) {
	return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
      <div className=".card-container">
        <header>
          <img className="profile-img"src={avatar} alt={props.name} />
        </header>
        <h1 className="bold-text">
          {props.name} 
        </h1>
        <h2 className="normal-text">{props.title}</h2>
        <div className="social-container">
          <div className="followers">
            <h1 className="bold-text">{props.followers}</h1>
            <h2 className="smaller-text">Followers</h2>
          </div>
          <div className="likes">
            <h1 className="bold-text">{props.views}</h1>
            <h2 className="smaller-text">Views</h2>
          </div>
          <div className="photos">
            <h1 className="bold-text">{props.photos}</h1>
            <h2 className="smaller-text">Photos</h2>
          </div>
        </div>
      </div>
    </Box>
	);
}

export default ProfileCard;
