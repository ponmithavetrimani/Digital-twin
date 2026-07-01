const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function postData(endpoint: string, data: any) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function getData(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  return res.json();
}