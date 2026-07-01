import { postData } from "./api";

export async function loginUser(email: string, password: string) {
  return postData("/auth/login", { email, password });
}

export async function registerUser(data: any) {
  return postData("/auth/register", data);
}