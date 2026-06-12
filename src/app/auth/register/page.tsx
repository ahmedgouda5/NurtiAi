"use client";

import {
  RegisterFormProvider,
  useRegisterForm,
} from "@/AppFeature/auth/register/RegisterFormContext";
import SignUp from "@/AppFeature/auth/register/page";
import AuthInfo from "@/AppFeature/auth/register/authInfo/page";
import MaritalStatusStep from "@/AppFeature/auth/register/maritalStatus/page";
import FinancialStatusStep from "@/AppFeature/auth/register/financialStatus/page";
import HealthConditionsStep from "@/AppFeature/auth/register/healthConditions/page";
import { theme } from "@/styles/theme";

const STEP_LABELS = [
  "Personal Info",
  "Body & Fitness",
  "Relationship",
  "Budget",
  "Health",
];

const TOTAL_STEPS = 5;

function RegisterSteps() {
  const { step } = useRegisterForm();
  const progressPct = (step / TOTAL_STEPS) * 100;

  return (
    <div className="register-wrapper">
      {/* Step indicator dots */}
      <div className="step-dots-row">
        {STEP_LABELS.map((label, i) => {
          const num = i + 1;
          const isDone = step > num;
          const isActive = step === num;
          return (
            <div key={label} className="step-dot-item">
              <div
                className="step-dot"
                style={{
                  background: isDone
                    ? theme.colors.primary
                    : isActive
                      ? theme.colors.primary
                      : theme.colors.bg3,
                  borderColor:
                    isActive || isDone
                      ? theme.colors.primary
                      : theme.colors.border,
                  color:
                    isActive || isDone ? "#fff" : theme.colors.textSecondary,
                  transform: isActive ? "scale(1.15)" : "scale(1)",
                }}
              >
                {isDone ? "✓" : num}
              </div>
              <span
                className="step-dot-label"
                style={{
                  color: isActive
                    ? theme.colors.text
                    : theme.colors.textSecondary,
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <p className="progress-label">
        Step {step} of {TOTAL_STEPS}
      </p>

      {/* Step renderer */}
      {step === 1 && <SignUp />}
      {step === 2 && <AuthInfo />}
      {step === 3 && <MaritalStatusStep />}
      {step === 4 && <FinancialStatusStep />}
      {step === 5 && <HealthConditionsStep />}

      <style jsx>{`
        .register-wrapper {
          min-height: 100vh;
          padding: 2rem 1rem;
          background: ${theme.colors.bg};
        }

        .step-dots-row {
          max-width: 56rem;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.25rem;
        }

        .step-dot-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          flex: 1;
        }

        .step-dot {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          transition:
            background 0.3s,
            border-color 0.3s,
            transform 0.3s;
        }

        .step-dot-label {
          font-size: 0.65rem;
          text-align: center;
          transition:
            color 0.3s,
            font-weight 0.3s;
        }

        .progress-bar-track {
          max-width: 56rem;
          margin: 0 auto 0.5rem;
          height: 6px;
          border-radius: 99px;
          background: ${theme.colors.border};
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          border-radius: 99px;
          background: ${theme.colors.primary};
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .progress-label {
          max-width: 56rem;
          margin: 0 auto 1.5rem;
          font-size: 0.85rem;
          color: ${theme.colors.textSecondary};
        }
      `}</style>
    </div>
  );
}

const RegisterPage = () => {
  return (
    <RegisterFormProvider>
      <RegisterSteps />
    </RegisterFormProvider>
  );
};

export default RegisterPage;
