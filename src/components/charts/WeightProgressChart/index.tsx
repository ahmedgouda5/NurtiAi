'use client';

import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { weightProgressData } from '@/data/charts';
import { CanvasWrap, Header, Meta, Title, Wrap } from './styles';
import { GlassCard } from '@/components/shared/GlassCard';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, ArcElement, Filler);

export function WeightProgressChart() {
  const data = {
    labels: weightProgressData.map((entry) => entry.month),
    datasets: [
      {
        label: 'Weight',
        data: weightProgressData.map((entry) => entry.value),
        borderColor: '#00D68F',
        backgroundColor: 'rgba(0, 214, 143, 0.18)',
        pointBackgroundColor: '#00D68F',
        pointBorderColor: '#04101f',
        pointRadius: 5,
        borderWidth: 3,
        tension: 0.42,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#081222',
        titleColor: '#F0F6FF',
        bodyColor: '#7A90B3',
        borderColor: 'rgba(255,255,255,0.08)',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: '#7A90B3' },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
      y: {
        ticks: { color: '#7A90B3' },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
    },
  };

  return (
    <GlassCard padding="0">
      <Wrap as={motion.div} whileHover={{ y: -4 }}>
        <Header>
          <div>
            <Title>Weight progress</Title>
            <Meta>4.5 kg down over 6 months</Meta>
          </div>
          <Meta>-5.4%</Meta>
        </Header>
        <CanvasWrap>
          <Line data={data} options={options} />
        </CanvasWrap>
      </Wrap>
    </GlassCard>
  );
}

