const api = { me };

async function me() {
  const response = await fetch(`http://localhost:3001/api/me`);
  return response.json();
}

export default api;
