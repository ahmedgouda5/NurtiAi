/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignUpSchema } from "@/app/Schemes/AuthSchema";
import { useRegisterForm, type Step1Data } from "./RegisterFormContext";
import {
  RegisterContainer,
  Header,
  Title,
  Subtitle,
  Form,
  InputGroup,
  InputGroupFull,
  Input,
  ErrorText,
  SubmitContainer,
  SubmitButton,
} from "./style";

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
    <RegisterContainer>
      <Header>
        <Title>Create Account 🚀</Title>
        <Subtitle>Step 1 of 2 — Tell us about yourself.</Subtitle>
      </Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Input placeholder="First Name" {...register("firstName")} />
          {errors.firstName && (
            <ErrorText>{errors.firstName.message}</ErrorText>
          )}
        </InputGroup>

        <InputGroup>
          <Input placeholder="Last Name" {...register("lastName")} />
          {errors.lastName && (
            <ErrorText>{errors.lastName.message}</ErrorText>
          )}
        </InputGroup>

        <InputGroupFull>
          <Input type="email" placeholder="Email" {...register("email")} />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </InputGroupFull>

        <InputGroupFull>
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <ErrorText>{errors.password.message}</ErrorText>
          )}
        </InputGroupFull>

        <InputGroup>
          <Input placeholder="Country" {...register("country")} />
          {errors.country && <ErrorText>{errors.country.message}</ErrorText>}
        </InputGroup>

        <InputGroup>
          <Input placeholder="City" {...register("city")} />
          {errors.city && <ErrorText>{errors.city.message}</ErrorText>}
        </InputGroup>

        <SubmitContainer>
          <SubmitButton type="submit" disabled={isSubmitting}>
            Next →
          </SubmitButton>
        </SubmitContainer>
      </Form>
    </RegisterContainer>
  );
};

export default SignUp;
