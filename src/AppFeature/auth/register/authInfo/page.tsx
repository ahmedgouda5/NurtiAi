"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignUpSchema } from "@/app/Schemes/AuthSchema";
import { theme } from "@/styles/theme";
import { fadeUp, springTransition } from "@/utils/animations";
import { motion } from "framer-motion";
import { Button } from "@/AppFeature/shared/Button";
import { useRegisterForm, type Step2Data } from "../RegisterFormContext";

// Step 2 only needs these fields
const Step2Schema = SignUpSchema.pick({
  weight: true,
  height: true,
  birthDate: true,
  gender: true,
  goals: true,
});

type Step2Type = z.infer<typeof Step2Schema>;

const AuthInfo = () => {
  const { saveStep2, goBack, isSubmitting } = useRegisterForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2Type>({
    resolver: zodResolver(Step2Schema),
    mode: "onBlur",
    defaultValues: {
      weight: undefined,
      height: undefined,
      birthDate: "",
      gender: "male",
      goals: "stay in shape",
    },
  });

  function onSubmit(data: Step2Type) {
    saveStep2(data as Step2Data);
  }

  return (
    <div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={springTransition}
        className="mx-auto max-w-4xl rounded-3xl border p-6 md:p-8"
        style={{
          background: theme.colors.bg2,
          borderColor: theme.colors.border,
        }}
      >
        <div className="mb-8">
          <h1
            className="text-3xl font-bold"
            style={{ color: theme.colors.text }}
          >
            Almost There 💪
          </h1>
          <p className="mt-2" style={{ color: theme.colors.textSecondary }}>
            Step 2 of 5 — Your body & fitness goals.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {/* Weight */}
          <div>
            <input
              type="number"
              placeholder="Weight (kg)"
              {...register("weight", { valueAsNumber: true })}
              className="input"
            />
            {errors.weight && (
              <p className="mt-1 text-sm text-red-500">
                {errors.weight.message}
              </p>
            )}
          </div>

          {/* Height */}
          <div>
            <input
              type="number"
              placeholder="Height (cm)"
              {...register("height", { valueAsNumber: true })}
              className="input"
            />
            {errors.height && (
              <p className="mt-1 text-sm text-red-500">
                {errors.height.message}
              </p>
            )}
          </div>

          {/* Birth Date */}
          <div className="md:col-span-2">
            <label
              className="mb-1 block text-sm"
              style={{ color: theme.colors.textSecondary }}
            >
              Date of Birth
            </label>
            <input type="date" {...register("birthDate")} className="input" />
            {errors.birthDate && (
              <p className="mt-1 text-sm text-red-500">
                {errors.birthDate.message}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label
              className="mb-1 block text-sm"
              style={{ color: theme.colors.textSecondary }}
            >
              Gender
            </label>
            <select {...register("gender")} className="input">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Goals */}
          <div>
            <label
              className="mb-1 block text-sm"
              style={{ color: theme.colors.textSecondary }}
            >
              Fitness Goal
            </label>
            <select {...register("goals")} className="input">
              <option value="lose weight">Lose Weight</option>
              <option value="gain weight">Gain Weight</option>
              <option value="build muscle">Build Muscle</option>
              <option value="stay in shape">Stay in Shape</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex gap-3 md:col-span-2">
            <button
              type="button"
              onClick={goBack}
              className="input w-full cursor-pointer"
              style={{ color: theme.colors.textSecondary }}
            >
              ← Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg p-3 text-white"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark})`,
              }}
            >
              Next →
            </button>
          </div>
        </form>
      </motion.div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px 16px;
          border-radius: ${theme.radius};
          background: ${theme.colors.bg3};
          border: 1px solid ${theme.colors.border};
          color: ${theme.colors.text};
          outline: none;
        }

        .input:focus {
          border-color: ${theme.colors.primaryDark};
        }
      `}</style>
    </div>
  );
};

export default AuthInfo;
