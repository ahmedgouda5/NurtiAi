"use client";

import React, { createContext, useContext, useState } from "react";
import { z } from "zod";
import { SignUpSchema } from "@/app/Schemes/AuthSchema";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/User.Store";
export type SignUpType = z.infer<typeof SignUpSchema>;

/** Step 1 — Personal Info */
export type Step1Data = Pick<
  SignUpType,
  "firstName" | "lastName" | "email" | "password" | "country" | "city"
>;

/** Step 2 — Body & Fitness */
export type Step2Data = Pick<
  SignUpType,
  "weight" | "height" | "birthDate" | "gender" | "goals"
>;

export type Step3Data = Pick<SignUpType, "maritalStatus">;

export type Step4Data = Pick<SignUpType, "financialStatus">;

export type Step5Data = Pick<SignUpType, "healthConditions">;

type StepNumber = 1 | 2 | 3 | 4 | 5;

type RegisterFormContextValue = {
  step: StepNumber;
  step1Data: Partial<Step1Data>;
  step2Data: Partial<Step2Data>;
  step3Data: Partial<Step3Data>;
  step4Data: Partial<Step4Data>;
  saveStep1: (data: Step1Data) => void;
  saveStep2: (data: Step2Data) => void;
  saveStep3: (data: Step3Data) => void;
  saveStep4: (data: Step4Data) => void;
  goBack: () => void;
  submitAll: (step5Data: Step5Data) => Promise<void>;
  isSubmitting: boolean;
};

const RegisterFormContext = createContext<RegisterFormContextValue | null>(
  null,
);

export function RegisterFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [step, setStep] = useState<StepNumber>(1);
  const [step1Data, setStep1Data] = useState<Partial<Step1Data>>({});
  const [step2Data, setStep2Data] = useState<Partial<Step2Data>>({});
  const [step3Data, setStep3Data] = useState<Partial<Step3Data>>({});
  const [step4Data, setStep4Data] = useState<Partial<Step4Data>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function saveStep1(data: Step1Data) {
    setStep1Data(data);
    setStep(2);
  }

  function saveStep2(data: Step2Data) {
    setStep2Data(data);
    setStep(3);
  }

  function saveStep3(data: Step3Data) {
    setStep3Data(data);
    setStep(4);
  }

  function saveStep4(data: Step4Data) {
    setStep4Data(data);
    setStep(5);
  }

  function goBack() {
    setStep((prev) => (prev > 1 ? ((prev - 1) as StepNumber) : 1));
  }
  const router = useRouter();
  async function submitAll(step5Data: Step5Data) {
    const fullData: SignUpType = {
      ...(step1Data as Step1Data),
      ...(step2Data as Step2Data),
      ...(step3Data as Step3Data),
      ...(step4Data as Step4Data),
      ...step5Data,
    };

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/Register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullData),
      });

      const data = await res.json();

      console.log(data);
      if (!res.ok) {
        throw new Error(data.error ?? "Registration failed");
      }

      useUserStore.getState().setUser(data.user);
      router.push("/dashboard");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <RegisterFormContext.Provider
      value={{
        step,
        step1Data,
        step2Data,
        step3Data,
        step4Data,
        saveStep1,
        saveStep2,
        saveStep3,
        saveStep4,
        goBack,
        submitAll,
        isSubmitting,
      }}
    >
      {children}
    </RegisterFormContext.Provider>
  );
}

export function useRegisterForm() {
  const ctx = useContext(RegisterFormContext);
  if (!ctx) {
    throw new Error(
      "useRegisterForm must be used inside <RegisterFormProvider>",
    );
  }
  return ctx;
}
