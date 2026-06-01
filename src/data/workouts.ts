import type { WorkoutExercise } from '@/types/workout';

export const workouts: WorkoutExercise[] = [
  {
    id: 'push-day',
    name: 'Incline Dumbbell Press',
    focus: 'Upper chest',
    reps: '4 x 10',
    duration: '12 min',
    calories: 110,
    equipment: 'Dumbbells',
  },
  {
    id: 'pull-day',
    name: 'Lat Pulldown',
    focus: 'Back width',
    reps: '4 x 12',
    duration: '10 min',
    calories: 95,
    equipment: 'Cable machine',
  },
  {
    id: 'legs-day',
    name: 'Goblet Squat',
    focus: 'Legs & core',
    reps: '3 x 15',
    duration: '14 min',
    calories: 125,
    equipment: 'Kettlebell',
  },
  {
    id: 'conditioning',
    name: 'Sled Push Intervals',
    focus: 'Conditioning',
    reps: '6 rounds',
    duration: '8 min',
    calories: 145,
    equipment: 'Sled',
  },
];

