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
import Card from './ui/Card';
import Badge from './ui/Badge';

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
        borderColor: '#BF82FF',
        backgroundColor: 'rgba(191, 130, 255, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: '#BF82FF',
        pointBorderColor: 'white',
        pointBorderWidth: 2,
        pointHoverRadius: 6,
      },
      {
        fill: false,
        label: 'Team Average',
        data: [10, 12, 14, 13, 16, 18, 17, 19],
        borderColor: '#25CD25',
        borderWidth: 2,
        borderDash: [5, 5],
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
        display: true,
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#131313',
        bodyColor: '#454545',
        borderColor: '#EDEDED',
        borderWidth: 1,
        padding: 10,
        displayColors: true,
        boxWidth: 8,
        boxHeight: 8,
        usePointStyle: true,
        cornerRadius: 8,
        titleFont: {
          size: 12,
          weight: 'bold' as const,
        },
        bodyFont: {
          size: 12,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 30,
        ticks: {
          stepSize: 10,
          padding: 10,
          font: {
            size: 11,
          },
        },
        grid: {
          color: 'rgba(241, 241, 241, 0.7)',
        },
        border: {
          dash: [5, 5],
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };

  return (
    <Card className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-[#131313]">Performance Trends</h3>
        <Badge variant="primary" className="font-medium">
          {timeframe === 'month' ? 'Monthly' : timeframe === 'quarter' ? 'Quarterly' : 'Yearly'}
        </Badge>
      </div>
      
      <div className="flex gap-4 mb-6 border-b border-[#F0F0F0] pb-2">
        <button 
          className={`text-sm font-medium py-2 transition-colors ${
            timeframe === 'month' 
              ? 'text-[#BF82FF] border-b-2 border-[#BF82FF]' 
              : 'text-[#6B6B6B] hover:text-[#131313]'
          }`}
          onClick={() => setTimeframe('month')}
        >
          Last Month
        </button>
        <button 
          className={`text-sm font-medium py-2 transition-colors ${
            timeframe === 'quarter' 
              ? 'text-[#BF82FF] border-b-2 border-[#BF82FF]' 
              : 'text-[#6B6B6B] hover:text-[#131313]'
          }`}
          onClick={() => setTimeframe('quarter')}
        >
          Quarter
        </button>
        <button 
          className={`text-sm font-medium py-2 transition-colors ${
            timeframe === 'year' 
              ? 'text-[#BF82FF] border-b-2 border-[#BF82FF]' 
              : 'text-[#6B6B6B] hover:text-[#131313]'
          }`}
          onClick={() => setTimeframe('year')}
        >
          Year
        </button>
      </div>

      <div className="h-[250px] mt-4">
        <Line options={options} data={data} />
      </div>
      
      <div className="flex justify-between mt-4 text-xs text-[#6B6B6B]">
        <div>Jan 2023</div>
        <div>Aug 2023</div>
      </div>
    </Card>
  );
};

export default PerformanceChart; 