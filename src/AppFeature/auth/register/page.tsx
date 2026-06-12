/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/AppFeature/shared/Button";
import { theme } from "@/styles/theme";
import { fadeUp, springTransition } from "@/utils/animations";
import { motion } from "framer-motion";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignUpSchema } from "@/app/Schemes/AuthSchema";
import { useRegisterForm, type Step1Data } from "./RegisterFormContext";
import { ButtonBase } from "@/AppFeature/shared/Button/styles";

// Step 1 only needs these fields
const Step1Schema = SignUpSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
  password: true,
  country: true,
  city: true,
});

type Step1Type = z.infer<typeof Step1Schema>;

const SignUp = () => {
  const { saveStep1, step1Data } = useRegisterForm();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Step1Type>({
    resolver: zodResolver(Step1Schema),
    mode: "onBlur",
    defaultValues: {
      email: step1Data.email ?? "",
      password: step1Data.password ?? "",
      firstName: step1Data.firstName ?? "",
      lastName: step1Data.lastName ?? "",
      country: step1Data.country ?? "",
      city: step1Data.city ?? "",
    },
  });

  function onSubmit(data: Step1Type) {
    saveStep1(data as Step1Data);
  }

  return (
    <div className="">
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
            Create Account 🚀
          </h1>

          <p className="mt-2" style={{ color: theme.colors.textSecondary }}>
            Step 1 of 2 — Tell us about yourself.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {/* First Name */}
          <div>
            <input
              placeholder="First Name"
              {...register("firstName")}
              className="input"
            />

            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <input
              placeholder="Last Name"
              {...register("lastName")}
              className="input"
            />

            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="input"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="md:col-span-2">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="input"
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Country */}
          <div>
            <input
              placeholder="Country"
              {...register("country")}
              className="input"
            />
            {errors.country && (
              <p className="mt-1 text-sm text-red-500">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* City */}
          <div>
            <input placeholder="City" {...register("city")} className="input" />
            {errors.city && (
              <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
            )}
          </div>

          {/* Next */}
          <div className="col-span-1 mt-2 md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded-lg p-3 text-white`}
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

export default SignUp;
