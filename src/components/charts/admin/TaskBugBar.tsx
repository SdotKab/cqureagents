"use client"

import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Client 1',
    Bugs: 10,
    Tasks: 24,
  },
  {
    name: 'Client 2',
    Bugs: 3,
    Tasks: 45,
  },
  {
    name: 'Client 3',
    Bugs: 14,
    Tasks: 30,
  },
  {
    name: 'Client 4',
    Bugs: 7,
    Tasks: 39,
  },
  {
    name: 'Client 5',
    Bugs: 22,
    Tasks: 18,
  },
];

const TaskBugBar = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold p-3">Tasks and Bugs</h1>
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
            <Bar dataKey="Bugs" fill="#b04a4a" />
            <Bar dataKey="Tasks" fill="#296fba" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TaskBugBar;