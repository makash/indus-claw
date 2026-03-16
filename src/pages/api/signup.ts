import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://indusclaw.in',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await request.json();
    const { email, source, locale, hp } = body as {
      email?: string;
      source?: string;
      locale?: string;
      hp?: string;
    };

    // Honeypot check
    if (hp) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Rate limit: simple check via CF headers
    const cfCountry = request.headers.get('cf-ipcountry') || null;
    const userAgent = request.headers.get('user-agent')?.slice(0, 256) || null;

    // Access D1 via Cloudflare Workers env
    const { env } = await import('cloudflare:workers');
    const db = (env as { DB: D1Database }).DB;

    await db
      .prepare(
        `INSERT INTO signups (email, source, locale, ip_country, user_agent)
         VALUES (?, ?, ?, ?, ?)
         ON CONFLICT(email) DO UPDATE SET
           source = excluded.source,
           locale = excluded.locale`
      )
      .bind(
        email.toLowerCase().trim(),
        source || '/',
        locale || 'en',
        cfCountry,
        userAgent
      )
      .run();

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';

    // Duplicate email is fine — treat as success
    if (message.includes('UNIQUE constraint')) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://indusclaw.in',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
