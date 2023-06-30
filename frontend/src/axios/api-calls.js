import { publicRequest } from "./requestMethods";

export const login = async (user) => {
  try {
      const res = await publicRequest.post("/auth/login", user);
      return true
  } catch (err) {
      return false
  }
};

export const registerUser = async (user) => {
  try {
    const res = await publicRequest.post("/auth/register", user);
    return true
  } catch (err) {
    return false
  }
};

export const confirmationEmail = async (user) => {
  try {
    const res = await publicRequest.post("/email/confirmation", user);
    return true
  } catch (err) {
    return false
  }
};

export const codeEmail = async (content) => {
  try {
    await publicRequest.post("/email/send-code", content);
    return true
  } catch (err) {
    return false
  }
};