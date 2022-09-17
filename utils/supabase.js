import { createClient } from "@supabase/supabase-js";

const supabaseUrl ="apirul";
const supabaseAnonKey ="anonkey";


export const supabase = createClient(supabaseUrl,supabaseAnonKey);
