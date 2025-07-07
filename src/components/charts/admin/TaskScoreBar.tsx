"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Client 1',
    Tasks: 24,
    Score: 96,
  },
  {
    name: 'Client 2',
    Tasks: 15,
    Score: 94,
  },
  {
    name: 'Client 3',
    Tasks: 32,
    Score: 87,
  },
  {
    name: 'Client 4',
    Tasks: 28,
    Score: 59,
  },
  {
    name: 'Client 5',
    Tasks: 41,
    Score: 92,
  },
];

const TaskScoreBar = () => {
  return (
      <div className="bg-white rounded-xl w-full h-full p-4">
        {/* TITLE */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold p-3">Score and Tasks</h1>
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        {/* CHART */}
        <div className="relative w-full h-[75%]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Score" fill="#64b04a" activeBar={<Rectangle fill="pink" stroke="blue" />} />
              <Bar dataKey="Tasks" fill="#de773c" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
          </ResponsiveContainer>
      </div>
      </div>
    );
  }

export default TaskScoreBar;