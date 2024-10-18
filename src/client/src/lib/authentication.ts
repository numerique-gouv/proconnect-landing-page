import Cookies from "js-cookie";

function getUserInfos() {
  const firstName = Cookies.get("firstName");
  const lastName = Cookies.get("lastName");
  const email = Cookies.get("email");
  const isIdentityProviderPCI = Cookies.get("isIdentityProviderPCI") === "true";

  return {
    firstName,
    lastName,
    email,
    isIdentityProviderPCI,
  };
}

function isUserConnected() {
  const { firstName, lastName, email } = getUserInfos();
  return !!firstName && !!lastName && !!email;
}

export { getUserInfos, isUserConnected };
