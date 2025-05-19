"use client";

import React from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface TeamPerformanceDistributionProps {
  className?: string;
}

const TeamPerformanceDistribution: React.FC<TeamPerformanceDistributionProps> = ({ 
  className = '' 
}) => {
  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
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
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
        },
      },
      x: {
        min: 0,
        max: 100,
        ticks: {
          callback: function(value: number | string) {
            return value + '%';
          },
          stepSize: 20,
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
    },
  };

  const data = {
    labels: ['Productivity', 'Goal Completion', 'Code Quality', 'Team Collaboration', 'Innovation'],
    datasets: [
      {
        label: 'Current Quarter',
        data: [78, 85, 70, 92, 65],
        backgroundColor: 'rgba(191, 130, 255, 0.7)',
        borderWidth: 0,
        borderRadius: 4,
        barThickness: 18,
      },
      {
        label: 'Previous Quarter',
        data: [65, 72, 68, 85, 60],
        backgroundColor: 'rgba(191, 130, 255, 0.3)',
        borderWidth: 0,
        borderRadius: 4,
        barThickness: 18,
      },
    ],
  };

  return (
    <div className={`h-full ${className}`}>
      <div className="h-[250px] mt-4">
        <Bar options={options} data={data} />
      </div>
      
      <div className="mt-4 text-xs text-center text-[#6B6B6B]">
        <p>Comparison between current and previous quarter metrics</p>
      </div>
    </div>
  );
};

export default TeamPerformanceDistribution; 