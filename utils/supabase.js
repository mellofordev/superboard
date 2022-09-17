import { createClient } from "@supabase/supabase-js";

const supabaseUrl ="https://uqerhibuqripzryleofp.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxZXJoaWJ1cXJpcHpyeWxlb2ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMzNTEyNjcsImV4cCI6MTk3ODkyNzI2N30.6swYfw6aJMmQkUTdiNa3Nu08D4F-16y5N_uXAb6pZeo";


export const supabase = createClient(supabaseUrl,supabaseAnonKey);
