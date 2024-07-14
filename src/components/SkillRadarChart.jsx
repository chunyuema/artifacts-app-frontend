import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';

const data = [
  { subject: 'Data Structure and Algorithms', A: 99, B: 100, fullMark: 100 },
  { subject: 'Backend Skills', A: 40, B: 100, fullMark: 100 },
  { subject: 'Frontend Skills', A: 67, B: 100, fullMark: 100 },
  { subject: 'DevOps Skills', A: 86, B: 100, fullMark: 100 },
  { subject: 'Database', A: 85, B: 100, fullMark: 100 },
  { subject: 'System Design', A: 65, B: 100, fullMark: 100 },
];

const SkillRadarChart = () => (
  <>
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom width="100%" height="10%">
        Skill Overview
      </Typography>
    </div>
    <ResponsiveContainer width="100%" height="90%" style={{ borderTop: 'solid rgb(206, 206, 206) 1px' }}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  </>
);

export default SkillRadarChart;
