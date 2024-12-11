"use client";

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

export default function Home() {
  // データとリンク情報を定義
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 100, 60, 80, 90, 60, 80],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0,
        pointLinks: [
          'https://example.com/january',
          'https://example.com/february',
          'https://example.com/march',
          'https://example.com/april',
          'https://example.com/may',
          'https://example.com/june',
          'https://example.com/july',
        ],
      },
    ],
  };

  // オプション設定
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sample Line Chart with Links',
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const { datasetIndex, index } = elements[0];
        const link = data.datasets[datasetIndex].pointLinks[index];
        if (link) {
          window.open(link, '_blank');
        }
      }
    },
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Chart.js 検証</h1>
      <div className="w-full max-w-4xl">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
