"use client";

import { useCallback, useState } from "react";

const useBMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [result, setResult] = useState<{
    bmi: number | null;
    status: string;
  }>({
    bmi: null,
    status: "",
  });

  const calculateBMI = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const weightValue = Number(weight);
      const heightValue = Number(height);

      if (
        !weightValue ||
        !heightValue ||
        weightValue <= 0 ||
        heightValue <= 0
      ) {
        setResult({
          bmi: null,
          status: "Please enter valid values.",
        });

        return;
      }

      const heightInMeters = heightValue / 100;

      const bmi = Number(
        (weightValue / (heightInMeters * heightInMeters)).toFixed(1),
      );

      let status = "";

      if (bmi < 18.5) {
        status = "Underweight";
      } else if (bmi < 25) {
        status = "Normal weight";
      } else if (bmi < 30) {
        status = "Overweight";
      } else {
        status = "Obese";
      }

      setResult({ bmi, status });
    },
    [weight, height],
  );

  return {
    weight,
    height,
    bmi: result.bmi,
    status: result.status,
    setWeight,
    setHeight,
    calculateBMI,
  };
};

export default useBMI;
