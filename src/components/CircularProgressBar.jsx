import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer} from 'recharts';

const CircularProgressMultiRing = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart width={300} height={300} innerRadius="20%" outerRadius="80%" data={data}>
        <RadialBar
            minAngle={15}
            // label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="progress"
        />
        <Tooltip />
        {/* <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" /> */}
        </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default CircularProgressMultiRing;
