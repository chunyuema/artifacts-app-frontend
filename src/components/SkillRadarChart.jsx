import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Box } from '@mui/material';

const data = [
  { subject: 'Fundamentals', A: 99, B: 100, fullMark: 150 },
  { subject: 'Backend', A: 120, B: 110, fullMark: 150 },
  { subject: 'Frontend', A: 98, B: 130, fullMark: 150 },
  { subject: 'DevOps', A: 86, B: 130, fullMark: 150 },
  { subject: 'Database', A: 85, B: 90, fullMark: 150 },
  { subject: 'Networking', A: 65, B: 85, fullMark: 150 },
];

const SkillRadarChart = () => (
  <Box width="100%" m="0 30px">

    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  </Box>
);

export default SkillRadarChart;
