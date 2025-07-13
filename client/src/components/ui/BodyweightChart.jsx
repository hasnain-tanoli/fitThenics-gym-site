import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BodyweightChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Bodyweight (kg)',
        data: [80, 82, 81, 83, 82, 84],
        fill: true,
        backgroundColor: 'hsla(var(--primary), 0.2)',
        borderColor: 'hsl(var(--primary))',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'hsl(var(--foreground))',
        },
      },
      title: {
        display: true,
        text: 'Bodyweight Trend',
        color: 'hsl(var(--foreground))',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'hsl(var(--secondary-foreground))',
        },
        grid: {
          color: 'hsl(var(--border))',
        },
      },
      y: {
        ticks: {
          color: 'hsl(var(--secondary-foreground))',
        },
        grid: {
          color: 'hsl(var(--border))',
        },
      },
    },
  };

  return (
    <div className="h-80">
      <Line data={data} options={options} />
    </div>
  );
};

export default BodyweightChart;
