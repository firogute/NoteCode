import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dzpildyiegjzbuyuysyn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6cGlsZHlpZWdqemJ1eXV5c3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExOTM5NjUsImV4cCI6MjA1Njc2OTk2NX0.8UhvDniPMmOxeTU5XCs8c6AHzAIvu3F8XKQ4aGNdJXI";

export const supabase = createClient(supabaseUrl, supabaseKey);
