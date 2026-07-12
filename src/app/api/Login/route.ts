import { createClient } from "@/utils/supabase/server";
import { LoginSchema } from "@/app/Schemes/AuthSchema";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body = await request.json();

  const parsed = LoginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.signInWithPassword({
    email: parsed.data.email,
    password: parsed.data.password,
  });

  console.log(data);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const { data: profile } = await supabase
    .from("profile")
    .select("*")
    .eq("id", data.user.id)
    .single();

  console.log(profile);

  return NextResponse.json(
    { user: { ...data.user, profile } },
    { status: 200 },
  );
}
