"use client";

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Image from 'next/image';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface TeamMemberMetric {
  id: string;
  name: string;
  avatar: string;
  role: string;
  metric: {
    name: string;
    value: string;
    trend: 'up' | 'down' | 'stable';
    data: number[];
  };
}

interface TeamMemberMetricsProps {
  title?: string;
  members: TeamMemberMetric[];
  className?: string;
}

const TeamMemberMetrics: React.FC<TeamMemberMetricsProps> = ({
  title = "Team Member Metrics",
  members,
  className = '',
}) => {
  const getSparklineOptions = () => {
    return {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
          min: 0,
        },
      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
        },
      },
      maintainAspectRatio: false,
    };
  };

  const getSparklineData = (data: number[], trend: 'up' | 'down' | 'stable') => {
    let borderColor;
    switch (trend) {
      case 'up':
        borderColor = '#25CD25';
        break;
      case 'down':
        borderColor = '#EB5050';
        break;
      default:
        borderColor = '#4E97FF';
    }

    return {
      labels: new Array(data.length).fill(''),
      datasets: [
        {
          data,
          borderColor,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 2,
          fill: false,
        },
      ],
    };
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3L14 9H10V13H6V9H2L8 3Z" fill="#25CD25" />
          </svg>
        );
      case 'down':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 13L2 7H6V3H10V7H14L8 13Z" fill="#EB5050" />
          </svg>
        );
      default:
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8H13" stroke="#4E97FF" strokeWidth="2" />
          </svg>
        );
    }
  };

  return (
    <div className={`bg-white rounded-2xl p-6 ${className}`}>
      {title && <h3 className="text-xl font-semibold text-[#131313] mb-4">{title}</h3>}

      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-[#F0F0F0]">
              <th className="pb-4 text-sm text-[#6B6B6B] font-medium">Team Member</th>
              <th className="pb-4 text-sm text-[#6B6B6B] font-medium">Metric</th>
              <th className="pb-4 text-sm text-[#6B6B6B] font-medium">Trend</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-b border-[#F0F0F0]">
                <td className="py-4">
                  <div className="flex items-center">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-[#131313]">{member.name}</p>
                      <p className="text-sm text-[#6B6B6B]">{member.role}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <div>
                    <p className="text-sm text-[#6B6B6B]">{member.metric.name}</p>
                    <p className="font-medium text-[#131313]">{member.metric.value}</p>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center">
                    <div className="w-24 h-12 mr-3">
                      <Line
                        options={getSparklineOptions()}
                        data={getSparklineData(member.metric.data, member.metric.trend)}
                      />
                    </div>
                    <div>{getTrendIcon(member.metric.trend)}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamMemberMetrics; 