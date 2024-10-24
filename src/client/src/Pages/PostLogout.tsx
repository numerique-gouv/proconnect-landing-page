import { useEffect } from "react";
import { deleteUserInfo } from "../lib/authentication";
import { useNavigate } from "react-router-dom";

function PostLogout() {
  const navigate = useNavigate();
  useEffect(() => {
    deleteUserInfo();
    navigate("/");
  }, []);

  return <div></div>;
}
export default PostLogout;
