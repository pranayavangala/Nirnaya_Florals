import { api, setToken, clearToken } from "./client";

async function loginAdmin(email, password) {
  const res = await api.post("/auth/login", { email, password });
  setToken(res.data.token);
  return res.data;
}

function logoutAdmin() {
  clearToken();
}

export default { loginAdmin, logoutAdmin };
