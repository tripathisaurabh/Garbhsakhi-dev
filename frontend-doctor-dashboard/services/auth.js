const API = process.env.NEXT_PUBLIC_BACKEND_URL;
export async function login(identifier, password) {
  const res = await fetch(`${API}/doctor/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identifier, password }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || "Login failed");
  }

  return res.json();
}
