'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Compliant', value: 120 },
  { name: 'Pending', value: 30 },
  { name: 'Not Tested', value: 12 },
];

const COLORS = ['#22c55e', '#facc15', '#ef4444']; // green, yellow, red

const ClientComplianceCard: React.FC = () => {
  return (
    <div className="mb-3 max-w-md mx-auto p-2 bg-white border-2 border-slate-500 rounded-lg md:w-4/5">
      <div className="flex justify-between items-center p-2">
        <h2 className="capitalize text-xs md:text-sm font-medium text-gray-500">Compliance</h2>
        <span className="text-[9px] md:text-[10px] px-2 py-1 rounded-full border-2 border-slate-300">
          05/25
        </span>
      </div>

      <div className="w-full aspect-square">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="50%"
              outerRadius="70%"
              dataKey="value"
              paddingAngle={3}
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${entry.name}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Framework */}
      <div className="flex justify-around mt-4 text-lg font-semibold md:text-sm text-gray-700">
        SOC2
      </div>
      {/* Legend */}
      <div className="flex justify-around mt-4 text-xs md:text-sm text-gray-700">
        <div className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded-full bg-[#22c55e]" />
          <span>Compliant (120)</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded-full bg-[#facc15]" />
          <span>Pending (30)</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded-full bg-[#ef4444]" />
          <span>Not Tested (12)</span>
        </div>
      </div>
    </div>
  );
};

export default ClientComplianceCard;
