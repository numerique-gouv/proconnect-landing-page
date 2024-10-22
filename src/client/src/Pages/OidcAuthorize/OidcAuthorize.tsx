import { useQuery } from "@tanstack/react-query";
import api from "../../lib/api";

function OidcAuthorize() {
  const query = useQuery<{ redirectUrl: string }>({
    queryFn: api.oidcAuthorize,
    queryKey: ["oidc-authorize"],
  });
  if (query.data?.redirectUrl) {
    window.location.replace(query.data?.redirectUrl);
    return <div />;
  }
  return <div>Loading...</div>;
}

export default OidcAuthorize;
