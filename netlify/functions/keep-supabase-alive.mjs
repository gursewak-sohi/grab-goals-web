/**
 * Performs a small read against Supabase so the project receives regular API
 * activity even when nobody has opened the Expo app recently.
 */
export default async function keepSupabaseAlive() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY must be configured in Netlify');
  }

  const response = await fetch(
    `${supabaseUrl}/rest/v1/app_versions?select=version&is_current=eq.true&limit=1`,
    {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Supabase keep-alive request failed with HTTP ${response.status}`);
  }

  console.log('Supabase keep-alive request succeeded');
}

