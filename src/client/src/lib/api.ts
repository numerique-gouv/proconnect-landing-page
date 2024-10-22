import { config } from "../config";

const api = { me };

async function me() {
  const response = await fetch(`${config.HOST_URL}/api/me`);
  return response.json();
}

export default api;
