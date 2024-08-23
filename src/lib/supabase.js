import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABSE_PROJECT,
  import.meta.env.VITE_SUPABASE_APIKEY
);
