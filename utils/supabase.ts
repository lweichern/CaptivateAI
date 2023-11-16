import { createClient } from "@supabase/supabase-js";

// ! means that the variable is confirm not null
export default createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
