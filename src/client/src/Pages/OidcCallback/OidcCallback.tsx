import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import api from "../../lib/api";

function OidcCallback() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code") || "";
  const state = searchParams.get("state") || "";
  if (!code || !state) {
    return <div>Erreur</div>;
  }

  return <OidcCallbackContent code={code} state={state} />;
}

function OidcCallbackContent(props: { code: string; state: string }) {
  const query = useQuery({
    queryFn: () => api.oidcCallback({ code: props.code, state: props.state }),
    queryKey: ["oidc-callback"],
  });
  if (!query.data && query.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <pre>{JSON.stringify(query.data)}</pre>
    </div>
  );
}

export default OidcCallback;
