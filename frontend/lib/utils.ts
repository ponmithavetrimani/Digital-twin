export function formatTime(date: string | Date) {
  const d = new Date(date);
  return d.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function truncate(text: string, length = 80) {
  if (!text) return "";
  return text.length > length
    ? text.substring(0, length) + "..."
    : text;
}

export function generateId() {
  return Math.random().toString(36).substring(2, 10);
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}