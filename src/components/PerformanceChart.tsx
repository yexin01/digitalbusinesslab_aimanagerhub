"use client";

import React, { useState } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Filler, 
  Legend 
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const PerformanceChart = () => {
  const [timeframe, setTimeframe] = useState<'month' | 'quarter' | 'year'>('month');

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  
  const data = {
    labels: months,
    datasets: [
      {
        fill: true,
        label: 'Goals Completed',
        data: [12, 15, 18, 14, 22, 25, 20, 23],
        borderColor: '#25CD25',
        backgroundColor: 'rgba(37, 205, 37, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 30,
        ticks: {
          stepSize: 10,
        },
        grid: {
          color: '#F1F1F1',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-2xl">
      <h3 className="text-xl font-semibold text-[#131313] mb-4">Performance Trends</h3>
      
      <div className="flex gap-4 mb-4">
        <button 
          className={`text-base ${timeframe === 'month' ? 'text-[#BF82FF] border-b-2 border-[#BF82FF]' : 'text-[#131313]'}`}
          onClick={() => setTimeframe('month')}
        >
          Last Month
        </button>
        <button 
          className={`text-base ${timeframe === 'quarter' ? 'text-[#BF82FF] border-b-2 border-[#BF82FF]' : 'text-[#131313]'}`}
          onClick={() => setTimeframe('quarter')}
        >
          Quarter
        </button>
        <button 
          className={`text-base ${timeframe === 'year' ? 'text-[#BF82FF] border-b-2 border-[#BF82FF]' : 'text-[#131313]'}`}
          onClick={() => setTimeframe('year')}
        >
          Year
        </button>
      </div>

      <div className="h-[200px] mt-8">
        <Line options={options} data={data} />
      </div>
      
      <div className="flex justify-between mt-4">
        <div className="text-xs text-[#7D7D7D]">Time</div>
        <div className="text-xs text-[#7D7D7D]">Goals Completed</div>
      </div>
    </div>
  );
};

export default PerformanceChart; 