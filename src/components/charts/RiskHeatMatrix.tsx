// components/ApexHeatmap.tsx

'use client' // for Next.js App Router (optional but helpful)

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'

// 👇 dynamically import ReactApexChart with SSR off
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface HeatmapDataPoint {
  x: string
  y: number
  meta: number
}

interface SeriesData {
  name: string
  data: HeatmapDataPoint[]
}

const RiskHeatMatrix = () => {
  const [series] = useState<SeriesData[]>([
    {
      name: 'Critical',
      data: [
        { x: 'Critical', y: 99, meta: 1 },
        { x: 'High', y: 77, meta: 0},
        { x: 'Medium', y: 55, meta: 0 },
        { x: 'Very Low', y: 33, meta: 0 },
        { x: 'Low', y: 11, meta: 0 }
      ]
    },
    {
      name: 'High',
      data: [
        { x: 'Critical', y: 77, meta: 0 },
        { x: 'High', y: 77, meta: 2},
        { x: 'Medium', y: 55, meta: 0 },
        { x: 'Very Low', y: 33, meta: 0 },
        { x: 'Low', y: 11, meta: 0 }
      ]
    },
        {
      name: 'Medium',
      data: [
        { x: 'Critical', y: 55, meta: 0 },
        { x: 'High', y: 55, meta: 0},
        { x: 'Medium', y: 33, meta: 0 },
        { x: 'Very Low', y: 33, meta: 0 },
        { x: 'Low', y: 11, meta: 4 }
      ]
    },
        {
      name: 'Low',
      data: [
        { x: 'Critical', y: 33, meta: 0 },
        { x: 'High', y: 33, meta: 0},
        { x: 'Medium', y: 33, meta: 5 },
        { x: 'Very Low', y: 11, meta: 0 },
        { x: 'Low', y: 11, meta: 0 }
      ]
    },
        {
      name: 'Very Low',
      data: [
        { x: 'Critical', y: 11, meta: 0 },
        { x: 'High', y: 11, meta: 0},
        { x: 'Medium', y: 11, meta: 3 },
        { x: 'Very Low', y: 11, meta: 0 },
        { x: 'Low', y: 11, meta:23 }
      ]
    },
  ])

const options: ApexOptions = {
  chart: {
    height: 450,
    type: 'heatmap'
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff']
    },
    formatter: function (_val, { seriesIndex, dataPointIndex, w }) {
      const meta = w.config.series[seriesIndex].data[dataPointIndex].meta
      return meta !== undefined ? meta.toString() : ''
    }
  },
    tooltip: {
    enabled: false
  },
  states: {
    hover: {
      filter: {
        type: 'none'
      }
    }
  },
  plotOptions: {
    heatmap: {
      colorScale: {
        ranges: [
          {
            from: 0,
            to: 20,
            color: '#18a818', // Bright Green for Very Low
            name: 'Very Low'
          },
          {
            from: 21,
            to: 40,
            color: '#7bba7b', // Green for Low 
            name: 'Low'
          },
          {
            from: 41,
            to: 60,
            color: '#fcba03', // Yellow for Medium
            name: 'Medium'
          },
          {
            from: 61,
            to: 80,
            color: '#cc1616', // Red for High
            name: 'High'
          },
          {
            from: 81,
            to: 100,
            color: '#000000', // Black for Critical
            name: 'Critical'
          }
        ]
      }
    }
  },
  xaxis: {
    type: 'category',
    categories: ['Critical', 'High', 'Medium', 'Low', 'Very Low']
  },
  title: {
    text: 'Risk Heat Map'
  },
  grid: {
    padding: {
      right: 20
    }
  }
}

  return (
    <div>
      <ReactApexChart options={options} series={series} type="heatmap" height={450} />
    </div>
  )
}

export default RiskHeatMatrix
