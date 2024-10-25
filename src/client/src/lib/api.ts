const api = { me };

async function me() {
  const BASE_URL = window.location.origin;
  const response = await fetch(`${BASE_URL}/api/me`);
  return response.json();
}

export default api;
