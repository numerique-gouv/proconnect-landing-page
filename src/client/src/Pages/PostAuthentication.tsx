import { useQuery } from "@tanstack/react-query";
import api from "../lib/api";
import { useEffect } from "react";
import { setUserInfo } from "../lib/authentication";
import { useNavigate } from "react-router-dom";

type meType = {
  firstName: string;
  lastName: string;
  email: string;
  isIdentityProviderPCI: boolean;
};

function PostAuthentification() {
  const query = useQuery<meType>({ queryFn: api.me, queryKey: ["me"] });
  const navigate = useNavigate();

  useEffect(() => {
    if (query.data) {
      setUserInfo(query.data);
      navigate("/mon-compte");
    }
  }, [query.data]);

  if (!query.data) {
    return <div>Loading</div>;
  }

  return <div>Loading</div>;
}
export default PostAuthentification;
