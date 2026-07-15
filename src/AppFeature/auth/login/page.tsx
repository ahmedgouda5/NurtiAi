"use client";
import { Button } from "@/AppFeature/shared/Button";
import { theme } from "@/styles/theme";
import styled from "styled-components";
import { fadeUpKeyframes, SPRING_EASE } from "@/styles/animations";
import { useState } from "react";

const AnimatedContent = styled.div`
  animation: ${fadeUpKeyframes} 0.55s ${SPRING_EASE} both;
`;

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaXmark } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/app/Schemes/AuthSchema";
import zod from "zod";
import { useTranslation } from "react-i18next";
import useUserStore from "@/store/User.Store";

const SignIn = () => {
  const { t } = useTranslation();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  async function OnSubmit(data: zod.infer<typeof LoginSchema>) {
    setSubmitError(null);
    const res = await fetch("/api/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const body = await res.json();

    if (!res.ok) {
      setSubmitError(body.error ?? "Sign in failed");
      return;
    }

    const { user } = body;
    const profile = user.profile;

    const userData = {
      id: user.id,
      email: user.email,
      firstName: profile.first_name,
      lastName: profile.last_name,
      country: profile.country,
      city: profile.city,
      weight: profile.weight,
      height: profile.height,
      birthDate: profile.birth_date,
      gender: profile.gender,
      goals: profile.goals,
      maritalStatus: profile.marital_status,
      financialStatus: profile.financial_status,
      healthConditions: profile.health_conditions ?? [],
    };

    useUserStore.getState().setUser(userData);
    reset();
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>{t("navbar.Sign In")}</Button>
      </AlertDialogTrigger>

      <AlertDialogContent
        className="border-none"
        style={{
          width: "700px",
          maxWidth: "90vw",
          background: theme.colors.bg2,
          color: theme.colors.text,
          borderRadius: theme.radius,
          border: `1px solid ${theme.colors.border}`,
        }}
      >
        <AnimatedContent>
          <AlertDialogHeader className="flex flex-row items-center justify-between">
            <AlertDialogTitle
              className="text-center text-2xl font-bold"
              style={{ color: theme.colors.text }}
            >
              Welcome Back 👋
            </AlertDialogTitle>
            <AlertDialogCancel>
              <FaXmark className="text-black" />
            </AlertDialogCancel>
          </AlertDialogHeader>

          <form
            onSubmit={handleSubmit(OnSubmit)}
            className="mt-6 flex flex-col gap-4"
          >
            <div>
              <label
                className="mb-2 block text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 outline-none transition-all"
                {...register("email")}
                style={{
                  background: theme.colors.bg3,
                  color: theme.colors.text,
                  borderRadius: theme.radius,
                  border: `1px solid ${theme.colors.border}`,
                }}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label
                className="mb-2 block text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 outline-none"
                {...register("password")}
                style={{
                  background: theme.colors.bg3,
                  color: theme.colors.text,
                  borderRadius: theme.radius,
                  border: `1px solid ${theme.colors.border}`,
                }}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button className="mt-2 w-full">Sign In</Button>
            {submitError && (
              <p className="text-sm text-red-500" role="alert">
                {submitError}
              </p>
            )}
          </form>
        </AnimatedContent>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SignIn;
