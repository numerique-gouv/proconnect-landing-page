import { config } from "../config";

const api = { me };

async function me() {
  const response = await fetch(`${config.API_URL}/api/me`);
  return response.json();
}

export default api;
