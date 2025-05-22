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

  // Data for the different periods
  const monthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu'],
    goalsCompleted: [12, 15, 18, 14, 22, 25, 20, 23],
    teamAverage: [10, 12, 14, 13, 16, 18, 17, 19],
    period: 'January 2024 - August 2024'
  };
  
  const quarterData = {
    labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
    goalsCompleted: [35, 42, 38, 45],
    teamAverage: [32, 36, 35, 40],
    period: 'Q1 2024 - Q4 2024'
  };
  
  const yearData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    goalsCompleted: [120, 145, 132, 158, 175, 190],
    teamAverage: [110, 125, 122, 140, 155, 170],
    period: '2019 - 2024'
  };
  
  // Select the data based on the period
  const currentData = (() => {
    switch(timeframe) {
      case 'quarter':
        return quarterData;
      case 'year':
        return yearData;
      default:
        return monthData;
    }
  })();
  
  const data = {
    labels: currentData.labels,
    datasets: [
      {
        fill: true,
        label: 'Goals Completed',
        data: currentData.goalsCompleted,
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
        data: currentData.teamAverage,
        borderColor: '#25CD25',
        borderWidth: 2,
        borderDash: [5, 5],
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  // Adjust the options based on the period
  const getYAxisMax = () => {
    switch(timeframe) {
      case 'quarter':
        return 70;
      case 'year':
        return 200;
      default:
        return 30;
    }
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
        max: getYAxisMax(),
        ticks: {
          stepSize: timeframe === 'year' ? 50 : timeframe === 'quarter' ? 20 : 10,
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
    <div className="h-full">
      <div className="flex gap-4 mb-4 border-b border-[#F0F0F0] pb-2">
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

      <div className="h-[220px] mt-2">
        <Line options={options} data={data} />
      </div>
      
      <div className="flex justify-between mt-3 text-xs text-[#6B6B6B]">
        <div>{currentData.period.split(' - ')[0]}</div>
        <div>{currentData.period.split(' - ')[1]}</div>
      </div>
    </div>
  );
};

export default PerformanceChart; 