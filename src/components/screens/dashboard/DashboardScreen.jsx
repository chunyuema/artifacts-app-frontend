import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../..";
import SkillRadarChart from "../../SkillRadarChart";
import ProfileCard from "../../ProfileCard";
import ProgressBar from "../../ProgressBar";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import SearchBar from "../../SearchBar";

const Dashboard = () => {

  const nodes = ['Kubernetes', 'Docker', 'Node.js', 'React'];

  return (
    <Grid container spacing={2}>

      <Grid item xs={12} md={6}>
        {/* Profile Card Goes Here */}
        <Box sx={{ height: 300 }}>
          <ProfileCard
            name="Chunyue Ma"
            age="28"
            title="Junior Software Engineer"
            followers="1,106"
            views="93"
            photos="614"
          ></ProfileCard>
        </Box>
      </Grid>


      <Grid item xs={12} md={6}>
        {/* Skill Radar Chart Goes Here */}
        <Box sx={{ height: 300, border: '1px solid #ccc' }}>
          <SkillRadarChart />
        </Box>
      </Grid>

      {/* Second row */}
      <Grid item xs={12}>
        <Box sx={{ height: 400, border: '1px solid #ccc', padding: 2 }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom align="center">
                Current Dev Path: Backend Engineering
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <SearchBar />
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ height: 300, border: '1px solid #ccc', pl: 2, overflowY: 'auto', marginTop: 2 }}>
            <ProgressBar nodes={nodes} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
