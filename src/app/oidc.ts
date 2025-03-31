import { config } from "../config";

async function buildOidcClient() {
  const client = await import("openid-client");
  const configOptions = config.IS_HTTP_PROTOCOL_FORBIDDEN
    ? undefined
    : { execute: [client.allowInsecureRequests] };
  const proConnectConfig = await client.discovery(
    new URL(config.PC_DISCOVERY_URL),
    config.PC_CLIENT_ID,
    {
      scopes: config.PC_SCOPES,
      id_token_signed_response_alg: config.PC_ID_TOKEN_SIGNED_RESPONSE_ALG,
      userinfo_signed_response_alg: config.PC_USERINFO_SIGNED_RESPONSE_ALG,
    },
    client.ClientSecretPost(config.PC_CLIENT_SECRET),
    configOptions
  );

  return {
    buildAuthorizationUrl,
    authorizationCodeGrant,
    fetchUserInfo,
    buildEndSessionUrl,
  };

  function buildAuthorizationUrl(params: { nonce: string; state: string }) {
    return client
      .buildAuthorizationUrl(proConnectConfig, {
        nonce: params.nonce,
        state: params.state,
        redirect_uri: `${config.HOST_URL}/openid/callback`,
        scope: config.PC_SCOPES,
        response_type: "code",
        claims: JSON.stringify({
          id_token: {
            amr: {
              essential: true,
            },
          },
        }),
      })
      .toString();
  }

  function authorizationCodeGrant(
    currentUrl: URL,
    params: {
      expectedNonce: string | undefined;
      expectedState: string | undefined;
    }
  ) {
    return client.authorizationCodeGrant(proConnectConfig, currentUrl, params);
  }

  function fetchUserInfo(access_token: string, sub: string) {
    return client.fetchUserInfo(proConnectConfig, access_token, sub);
  }

  function buildEndSessionUrl(id_token_hint: string) {
    return client
      .buildEndSessionUrl(proConnectConfig, {
        id_token_hint,
        post_logout_redirect_uri: `${config.HOST_URL}/post-logout`,
      })
      .toString();
  }
}

export { buildOidcClient };
