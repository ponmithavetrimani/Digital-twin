export interface Memory {
  id?: string;
  text: string;
  reply?: string;
  type?: "chat" | "preference" | "event";
  timestamp: string;
  embedding?: number[];
}