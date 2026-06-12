"use client";

import { theme } from "@/styles/theme";
import { useState } from "react";
import { IoIosWater } from "react-icons/io";

const initialGlasses = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  active: false,
}));

const WaterIntake = () => {
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
      className="h-full rounded-3xl border p-3 "
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
          {totalGlasses}/8 Glasses
        </span>
      </nav>

      <section className="mt-12 flex justify-between">
        {glasses.map((item) => (
          <button key={item.id} onClick={() => handleAddGlass(item.id)}>
            <IoIosWater
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
