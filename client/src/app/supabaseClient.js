import { createClient } from '@supabase/supabase-js'

{/*
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY */}

export const supabase = createClient("https://tqlstjghdsexlpmudcvd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbHN0amdoZHNleGxwbXVkY3ZkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNzAzOTAyNywiZXhwIjoyMDUyNjE1MDI3fQ.MIxPG9hX8vvCkATmS0osJVuRW3a4OgxDKkMtHwPmF4A")