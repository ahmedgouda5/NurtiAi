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

  const data = parsed.data;

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo: `${new URL(request.url).origin}/dashboard`,
      data: {
        first_name: data.firstName,
        last_name: data.lastName,
        country: data.country,
        city: data.city,
        weight: data.weight,
        height: data.height,
        birth_date: data.birthDate,
        gender: data.gender,
        goals: data.goals,
        marital_status: data.maritalStatus,
        financial_status: data.financialStatus,
        health_conditions: data.healthConditions,
      },
    },
  });

  if (authError) {
    return NextResponse.json({ error: authError.message }, { status: 400 });
  }

  return NextResponse.json({ user: authData?.user?.id }, { status: 201 });
}
