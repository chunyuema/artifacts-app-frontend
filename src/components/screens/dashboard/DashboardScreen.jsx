import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../..";
import SkillRadarChart from "../../SkillRadarChart";
import ProfileCard from "../../ProfileCard";
import { Box, Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      {/* First row */}
      <Grid item xs={12} md={6}>
        {/* Profile Card Goes Here */}
        <Box sx={{ height: 300, border: '1px solid #ccc' }}>
          <ProfileCard />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Heatmap Card Goes Here */}
        <Box sx={{ height: 300, border: '1px solid #ccc' }}>
          <ProfileCard />
        </Box>
      </Grid>

      {/* Second row */}
      <Grid item xs={12}>
        {/* Skill Radar Chart Goes Here */}
        <Box sx={{ height: 400, border: '1px solid #ccc' }}>
          <SkillRadarChart />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
