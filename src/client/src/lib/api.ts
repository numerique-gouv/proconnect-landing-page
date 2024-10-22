const api = { oidcCallback, oidcAuthorize };

async function oidcCallback(oidcParams: { code: string; state: string }) {
  const response = await fetch(
    `http://localhost:3001/openid/oidc-callback?code=${oidcParams.code}&state=${oidcParams.state}`
  );
  return response.text();
}

async function oidcAuthorize() {
  const response = await fetch(`http://localhost:3001/openid/authorize`);
  return response.json();
}

export default api;
