import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import avatar from "../assets/images/profile.png";
import CircularProgressMultiRing from "./CircularProgressBar";

const ProfileCard = (props) => {
  const data = [
    { name: "Hell", progress: 70, fill: "#0088FE" },
    { name: "Layer 2", progress: 50, fill: "#00C49F" },
    { name: "Layer 3", progress: 30, fill: "#FFBB28" },
    // { name: 'Layer 4', progress: 20, fill: '#FF8042' },
  ];

  return (
    <Box sx={{ height: "50%", padding: 0.5 }}>
      <Paper elevation={3} sx={{ height: "95%", padding: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="profile-img"
              src={avatar}
              alt={props.name}
              style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {props.name}
            </Typography>
            <Typography variant="subtitle1">{props.title}</Typography>
          </Grid>
        </Grid>
      </Paper>
      {/* Add margin or padding to create space */}
      <Box sx={{ m: 1 }} /> 
      <Paper elevation={3} sx={{ height: "100%", padding: 2, display: "flex", alignItems: "center" }}>
  <Grid container spacing={4}>
    <Grid item xs={8}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <div style={{ marginLeft: '20px', marginBottom: "10px" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {props.views}
            </Typography>
            <Typography variant="subtitle2">Mentors</Typography>
          </div>
          <div style={{ marginLeft: '20px', marginTop: "10px" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {props.photos}
            </Typography>
            <Typography variant="subtitle2">Verified Skills</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ marginLeft: '20px' }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {props.photos}
            </Typography>
            <Typography variant="subtitle2">Mentees</Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>

    <Grid item xs={4}>
      <CircularProgressMultiRing data={data} />
    </Grid>
  </Grid>
</Paper>

    </Box>
  );
};

export default ProfileCard;
