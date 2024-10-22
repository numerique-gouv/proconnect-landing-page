import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env["PORT"] || 3001,
  PC_CLIENT_ID: process.env["PC_CLIENT_ID"] || "",
  PC_CLIENT_SECRET: process.env["PC_CLIENT_SECRET"] || "",
  PC_ID_TOKEN_SIGNED_RESPONSE_ALG:
    process.env["PC_ID_TOKEN_SIGNED_RESPONSE_ALG"] || "RS256",
  PC_USERINFO_SIGNED_RESPONSE_ALG:
    process.env["PC_USERINFO_SIGNED_RESPONSE_ALG"] || "RS256",
  PC_DISCOVERY_URL: process.env["PC_DISCOVERY_URL"] || "",
  PC_ACR_VALUES: process.env["PC_ACR_VALUES"] || "",
  PC_SCOPES: process.env["PC_SCOPES"] || "",
  SESSION_SECRET: process.env["SESSION_SECRET"] || "",
  PCI_IDP_ID: process.env["PCI_IDP_ID"] || "",
  HOST_URL: process.env["HOST_URL"] || "",
};

export { config };
