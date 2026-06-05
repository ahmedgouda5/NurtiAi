/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/AppFeature/shared/Button";
import { theme } from "@/styles/theme";
import { fadeUp, springTransition } from "@/utils/animations";
import { motion } from "framer-motion";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignUpSchema } from "@/app/Schemes/AuthSchema";
import { z } from "zod";
import { FaXmark } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";

type SignUpType = z.infer<typeof SignUpSchema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      weight: undefined as any,
      height: undefined as any,
      birthDate: "",
      gender: "male",
      goals: "stay in shape",
      country: "",
      city: "",
    },
  });

  function onSubmit(data: SignUpType) {
    console.log(data);
    reset();
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          style={{
            backgroundColor: theme.colors.primaryDark,
            color: "black",
          }}
        >
          <FaRocket size={18} /> try for free
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent
        style={{
          width: "700px",
          maxWidth: "90vw",
          background: theme.colors.bg2,
          color: theme.colors.text,
          borderRadius: theme.radius,
          border: `1px solid ${theme.colors.border}`,
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={springTransition}
        >
          <AlertDialogHeader className="flex flex-row items-center justify-between">
            <AlertDialogTitle className="text-2xl font-bold">
              Create Account 🚀
            </AlertDialogTitle>

            <AlertDialogCancel>
              <FaXmark className="text-black" />
            </AlertDialogCancel>
          </AlertDialogHeader>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 grid grid-cols-2 gap-4"
          >
            {/* First Name */}
            <div>
              <input
                placeholder="First Name"
                {...register("firstName")}
                className="input"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
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
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="col-span-2">
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="input"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="col-span-2">
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="input"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Country */}
            <input
              placeholder="Country"
              {...register("country")}
              className="input"
            />

            {/* City */}
            <input placeholder="City" {...register("city")} className="input" />

            {/* Weight */}
            <input
              type="number"
              placeholder="Weight"
              {...register("weight", { valueAsNumber: true })}
              className="input"
            />

            {/* Height */}
            <input
              type="number"
              placeholder="Height"
              {...register("height", { valueAsNumber: true })}
              className="input"
            />

            {/* Birth Date */}
            <input
              type="date"
              {...register("birthDate")}
              className="input col-span-2"
            />

            {/* Gender */}
            <select {...register("gender")} className="input col-span-1">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            {/* Goals */}
            <select {...register("goals")} className="input col-span-1">
              <option value="lose weight">Lose Weight</option>
              <option value="gain weight">Gain Weight</option>
              <option value="build muscle">Build Muscle</option>
              <option value="stay in shape">Stay in Shape</option>
            </select>

            {/* Submit */}
            <Button disabled={isSubmitting} className="col-span-2 w-full mt-2">
              {isSubmitting ? "Creating..." : "Create Account"}
            </Button>
          </form>
        </motion.div>
      </AlertDialogContent>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 6px 18px;
          border-radius: ${theme.radius};
          background: ${theme.colors.bg3};
          border: 1px solid ${theme.colors.border};
          color: ${theme.colors.text};
          outline: none;
        }
      `}</style>
    </AlertDialog>
  );
};

export default SignUp;
