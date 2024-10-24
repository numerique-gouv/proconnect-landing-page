type userInfoType = {
  firstName: string;
  lastName: string;
  email: string;
  isIdentityProviderPCI: boolean;
};

const USER_INFO_KEY = "PRO_CONNECT_LANDING_PAGE_USER_INFO";

function getUserInfo(): userInfoType | undefined {
  const userInfo = localStorage.getItem(USER_INFO_KEY);
  if (!userInfo) {
    return undefined;
  }
  return JSON.parse(userInfo) as userInfoType;
}

function setUserInfo(userInfo: userInfoType) {
  return localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
}

function deleteUserInfo() {
  return localStorage.removeItem(USER_INFO_KEY);
}

export { getUserInfo, setUserInfo, deleteUserInfo };
