"use client"

import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'SOC2',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'CMMC',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'ISO',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'HIPAA',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'NIST',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'GDPR',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const RadarsChart = () => {
  return (
    <div className="bg-white border-2 border-slate-500 rounded-lg p-4 mb-4 w-full md:w-[80%] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="capitalize text-xs md:text-sm font-medium text-gray-500">Compliance</h2>
        <span className="text-[9px] md:text-[10px] px-2 py-1 rounded-full border-2 border-slate-300">
          05/25
        </span>
      </div>
      {/* CHART */}
      <div className="w-full aspect-square">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Framework Scores" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            {/* <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} /> */}
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RadarsChart