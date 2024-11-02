import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components from Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type UniqueEmotionWordsPerSessionProps = {
  data: number[];
  labels: string[];
};

const UniqueEmotionWordsPerSession: React.FC<UniqueEmotionWordsPerSessionProps> = ({ data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Vocabulary Count',
        data,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Vocabulary Usage Over Time',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default UniqueEmotionWordsPerSession;