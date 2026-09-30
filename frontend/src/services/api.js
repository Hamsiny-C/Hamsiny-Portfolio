const BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

/** POST /api/contact. Resolves with the server response, rejects with { message, errors }. */
export async function sendContact(payload) {
  let res;
  try {
    res = await fetch(`${BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    throw { message: 'Could not reach the server. Check your connection and try again.', errors: {} };
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw { message: data.message || 'Request failed.', errors: data.errors || {} };
  return data;
}
