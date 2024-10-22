import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUserInfo } from "../lib/authentication";

function PostLogout() {
  const navigate = useNavigate();
  useEffect(() => {
    deleteUserInfo();
    navigate("/");
  }, []);

  return <div />;
}
export default PostLogout;
