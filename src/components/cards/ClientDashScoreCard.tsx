'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import React, { useEffect, useRef, useState } from 'react';

const RADIAN = Math.PI / 180;

type ChartSegment = {
  name: string;
  value: number;
  color: string;
};

const chartData: ChartSegment[] = [
  { name: 'Black', value: 10, color: '#000000' },
  { name: 'Red', value: 25, color: '#ff0000' },
  { name: 'Yellow', value: 25, color: '#ffff00' },
  { name: 'Green', value: 40, color: '#00cc00' },
];

type NeedleProps = {
  value: number;
  cx: number;
  cy: number;
  iR: number;
  oR: number;
  color: string;
};

const renderNeedle = ({ value, cx, cy, iR, oR, color }: NeedleProps) => {
  const total = 100;
  const angle = 180 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * angle);
  const cos = Math.cos(-RADIAN * angle);
  const r = 5;

  const x0 = cx;
  const y0 = cy;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return (
    <>
      <circle cx={x0} cy={y0} r={r} fill={color} />
      <path d={`M${xba} ${yba} L${xbb} ${ybb} L${xp} ${yp} Z`} fill={color} />
    </>
  );
};

const ClientDashScoreCard: React.FC = () => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const finalValue = 94.3;

  const containerRef = useRef<HTMLDivElement>(null);
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setChartSize({ width, height });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    let frame: number;
    const duration = 800;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setAnimatedValue(finalValue * progress);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [finalValue]);

  const cx = chartSize.width / 2;
  const cy = chartSize.height;
  const iR = chartSize.width * 0.15;
  const oR = chartSize.width * 0.3;

  return (
    <div className="rounded-lg border-2 border-slate-500 p-4 shadow bg-white w-full max-w-md mx-auto">
        <div className="flex justify-between items-center">
        <h2 className="font-medium text-gray-500">Score</h2>
        <span className="text-[10px] px-2 py-1 rounded-full border-2 border-slate-300">
          05/25
        </span>
        </div>

      <div className="w-full aspect-[2/1]" ref={containerRef}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={chartData}
              cx={cx}
              cy={cy}
              innerRadius={iR}
              outerRadius={oR}
              stroke="none"
              isAnimationActive={false}
            >
              {chartData.map((entry) => (
                <Cell key={`cell-${entry.name}`} fill={entry.color} />
              ))}
            </Pie>
            {renderNeedle({
              value: animatedValue,
              cx,
              cy,
              iR,
              oR,
              color: '#333333',
            })}
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center mt-4">
        <span className="text-3xl font-bold text-gray-700">{animatedValue.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default ClientDashScoreCard;
