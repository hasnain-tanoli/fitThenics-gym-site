import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyCalories = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Calories',
        data: [2200, 2100, 2300, 2400, 2250, 2500, 2150],
        backgroundColor: 'rgba(79, 209, 197, 0.8)', // Teal with transparency
        borderColor: 'rgba(79, 209, 197, 1)', // Solid teal
        borderWidth: 1,
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
      title: {
        display: true,
        text: 'Weekly Calorie Intake',
        color: '#e2e8f0',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#94a3b8',
        },
        grid: {
          color: '#334155',
        },
      },
      y: {
        ticks: {
          color: '#94a3b8',
        },
        grid: {
          color: '#334155',
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-80">
      <Bar data={data} options={options} />
    </div>
  );
};

export default WeeklyCalories;
