import { createClient } from "@/utils/supabase/client";

export async function Logout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
}
