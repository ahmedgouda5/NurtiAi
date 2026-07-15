import { createClient } from "@/utils/supabase/client";

export async function Logout() {
  const supabase = createClient();
  await supabase.auth.signOut();
}
