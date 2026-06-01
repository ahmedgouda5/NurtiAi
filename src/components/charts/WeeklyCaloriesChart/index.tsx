'use client';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { weeklyCaloriesData } from '@/data/charts';
import { CanvasWrap, Header, Meta, Title, Wrap } from './styles';
import { GlassCard } from '@/components/shared/GlassCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export function WeeklyCaloriesChart() {
  const data = {
    labels: weeklyCaloriesData.map((entry) => entry.label),
    datasets: [
      {
        label: 'Calories',
        data: weeklyCaloriesData.map((entry) => entry.value),
        backgroundColor: 'rgba(56, 189, 248, 0.75)',
        borderRadius: 14,
      },
    ],
  };

  return (
    <GlassCard padding="0">
      <Wrap as={motion.div} whileHover={{ y: -4 }}>
        <Header>
          <div>
            <Title>Weekly calories</Title>
            <Meta>Consistency trend this week</Meta>
          </div>
          <Meta>1,965 avg</Meta>
        </Header>
        <CanvasWrap>
          <Bar
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: '#081222',
                  titleColor: '#F0F6FF',
                  bodyColor: '#7A90B3',
                },
              },
              scales: {
                x: { ticks: { color: '#7A90B3' }, grid: { display: false } },
                y: { ticks: { color: '#7A90B3' }, grid: { color: 'rgba(255,255,255,0.05)' } },
              },
            }}
          />
        </CanvasWrap>
      </Wrap>
    </GlassCard>
  );
}

