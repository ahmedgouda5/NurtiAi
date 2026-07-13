"use client";

import { theme } from "@/styles/theme";
import { useMemo, useState } from "react";
import { FaBottleWater } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";

type WaterIntakeProps = {
  dailyWaterLiters?: number;
};

const GLASS_VOLUME_LITERS = 0.25;

const WaterIntake = ({ dailyWaterLiters }: WaterIntakeProps) => {
  const glassCount = useMemo(() => {
    if (!dailyWaterLiters) return 8;
    return Math.max(4, Math.round(dailyWaterLiters / GLASS_VOLUME_LITERS));
  }, [dailyWaterLiters]);

  const initialGlasses = useMemo(
    () =>
      Array.from({ length: glassCount }, (_, index) => ({
        id: index + 1,
        active: false,
      })),
    [glassCount],
  );

  const [glasses, setGlasses] = useState(initialGlasses);
  const totalGlasses = glasses.filter((glass) => glass.active).length;

  function handleAddGlass(id: number) {
    setGlasses((prev) =>
      prev.map((glass) =>
        glass.id === id
          ? {
              ...glass,
              active: !glass.active,
            }
          : glass,
      ),
    );
  }

  return (
    <div
      className="h-full rounded-3xl border p-3"
      style={{
        backgroundColor: theme.colors.bg2,
        borderColor: theme.colors.border,
      }}
    >
      <nav className="flex justify-between">
        <h1
          style={{ color: theme.colors.blue }}
          className="flex items-center text-md font-semibold tracking-wider"
        >
          <IoIosWater />
          Water Intake
        </h1>

        <span style={{ color: theme.colors.textSecondary }}>
          {totalGlasses}/{glassCount} Glasses
          {dailyWaterLiters ? ` (${dailyWaterLiters}L goal)` : ""}
        </span>
      </nav>

      <section className="mt-12 flex justify-between flex-wrap gap-1">
        {glasses.map((item) => (
          <button key={item.id} onClick={() => handleAddGlass(item.id)}>
            <FaBottleWater
              size={30}
              style={{
                color: item.active
                  ? theme.colors.blue
                  : theme.colors.textSecondary,
              }}
            />
          </button>
        ))}
      </section>
    </div>
  );
};

export default WaterIntake;
