import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const SignUpSchema = z.object({
  firstName: z.string().min(3, "Name must be at least 3 characters long"),
  lastName: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),

  country: z.string().min(2, "Country is required"),
  city: z.string().min(2, "City is required"),

  weight: z
    .number()
    .min(30, "Weight must be at least 30")
    .max(250, "Weight must be at most 250")
    .transform((value) => Number(value)),

  height: z
    .number()
    .min(100, "Height must be at least 100")
    .max(250, "Height must be at most 250")
    .transform((value) => Number(value)),

  birthDate: z.string().min(1, "Birth date is required"),

  gender: z.enum(["male", "female"]),

  goals: z.enum([
    "lose weight",
    "gain weight",
    "build muscle",
    "stay in shape",
  ]),

  maritalStatus: z.enum(["single", "married", "divorced", "widowed"]),

  financialStatus: z.enum(["low", "middle", "high"]),

  healthConditions: z
    .array(z.string())
    .min(1, "Please select at least one option (choose 'None' if healthy)"),
});
