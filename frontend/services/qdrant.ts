import { postData } from "./api";

export async function storeMemory(memory: any) {
  return postData("/memory/store", memory);
}

export async function searchMemory(query: string) {
  return postData("/memory/search", { query });
}