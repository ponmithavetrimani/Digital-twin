import { postData } from "./api";

export async function generateTwinReply(
  message: string,
  memories: any[]
) {
  return postData("/ai/gemini", {
    message,
    memories,
  });
}