"use client";

import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface SkillsRadarChartProps {
  title?: string;
}

const SkillsRadarChart: React.FC<SkillsRadarChartProps> = ({ title }) => {
  const data = {
    labels: ['Machine Learning', 'API Integration', 'Project Management', 'Front-End Dev', 'Data Visualization', 'UI/UX Design'],
    datasets: [
      {
        label: 'Current Team',
        data: [65, 78, 90, 81, 56, 85],
        backgroundColor: 'rgba(191, 130, 255, 0.2)',
        borderColor: 'rgba(191, 130, 255, 1)',
        borderWidth: 2,
      },
      {
        label: 'Ideal Skills',
        data: [85, 80, 85, 85, 85, 80],
        backgroundColor: 'rgba(37, 205, 37, 0.1)',
        borderColor: 'rgba(37, 205, 37, 1)',
        borderWidth: 2,
        borderDash: [5, 5],
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          backdropColor: 'transparent'
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        pointLabels: {
          font: {
            size: 12
          }
        }
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          font: {
            size: 12
          }
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div className="bg-white rounded-2xl p-6">
      {title && <h3 className="text-xl font-semibold text-[#131313] mb-4">{title}</h3>}
      <div className="h-[400px]">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default SkillsRadarChart; 