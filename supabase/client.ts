import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL!;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!url || !serviceKey) throw new Error("Supabase env vars are missing");

// маленькая страховка: не даём подняться без ключа
if (serviceKey.length < 50) throw new Error("Service-role key looks wrong");

export const supabaseAdmin = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});
