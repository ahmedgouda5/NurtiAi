import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignUpSchema } from "@/app/Schemes/AuthSchema";
import { useRegisterForm, type Step2Data } from "../RegisterFormContext";
import {
  Container,
  Card,
  Header,
  Title,
  Subtitle,
  Form,
  InputGroup,
  InputGroupFull,
  Label,
  Input,
  ErrorText,
  ActionsRow,
  BackButton,
  SubmitButton,
} from "./style";

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
    <Container>
      <Card>
        <Header>
          <Title>Almost There 💪</Title>
          <Subtitle>Step 2 of 5 — Your body & fitness goals.</Subtitle>
        </Header>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Input
              type="number"
              placeholder="Weight (kg)"
              {...register("weight", { valueAsNumber: true })}
            />
            {errors.weight && <ErrorText>{errors.weight.message}</ErrorText>}
          </InputGroup>

          <InputGroup>
            <Input
              type="number"
              placeholder="Height (cm)"
              {...register("height", { valueAsNumber: true })}
            />
            {errors.height && <ErrorText>{errors.height.message}</ErrorText>}
          </InputGroup>

          <InputGroupFull>
            <Label>Date of Birth</Label>
            <Input type="date" {...register("birthDate")} />
            {errors.birthDate && (
              <ErrorText>{errors.birthDate.message}</ErrorText>
            )}
          </InputGroupFull>

          <InputGroup>
            <Label>Gender</Label>
            <Input as="select" {...register("gender")}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Input>
          </InputGroup>

          <InputGroup>
            <Label>Fitness Goal</Label>
            <Input as="select" {...register("goals")}>
              <option value="lose weight">Lose Weight</option>
              <option value="gain weight">Gain Weight</option>
              <option value="build muscle">Build Muscle</option>
              <option value="stay in shape">Stay in Shape</option>
            </Input>
          </InputGroup>

          <ActionsRow>
            <BackButton type="button" onClick={goBack}>
              ← Back
            </BackButton>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Next →
            </SubmitButton>
          </ActionsRow>
        </Form>
      </Card>
    </Container>
  );
};

export default AuthInfo;
