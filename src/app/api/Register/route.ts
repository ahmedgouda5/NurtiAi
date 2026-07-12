import { createClient } from "@/utils/supabase/server";
import { SignUpSchema } from "@/app/Schemes/AuthSchema";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = SignUpSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const {
    email,
    password,
    firstName,
    lastName,
    country,
    city,
    weight,
    height,
    birthDate,
    gender,
    goals,
    maritalStatus,
    financialStatus,
    healthConditions,
  } = parsed.data;

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const origin = new URL(request.url).origin;

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/dashboard`,
    },
  });

  if (authError) {
    return NextResponse.json({ error: authError.message }, { status: 400 });
  }

  const userId = authData.user?.id;

  if (!userId) {
    return NextResponse.json(
      { error: "Sign up succeeded but no user id was returned" },
      { status: 500 },
    );
  }

  const { error: profileError } = await supabase.from("profile").insert({
    id: userId,
    first_name: firstName,
    last_name: lastName,
    country,
    city,
    weight,
    height,
    birth_date: birthDate,
    gender,
    goals,
    marital_status: maritalStatus,
    financial_status: financialStatus,
    health_conditions: healthConditions,
  });

  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status: 400 });
  }

  return NextResponse.json(
    {
      user: {
        id: userId,
        email,
        firstName,
        lastName,
        country,
        city,
        weight,
        height,
        birthDate,
        gender,
        goals,
        maritalStatus,
        financialStatus,
        healthConditions,
      },
    },
    { status: 201 },
  );
}
