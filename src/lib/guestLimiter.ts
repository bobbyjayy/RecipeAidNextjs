const memoryStore = new Map<string, { count: number; timestamp: number }>();

export function limitGuest(ip: string, max = 3, windowMs = 60 * 1000): boolean {
  const now = Date.now();
  const entry = memoryStore.get(ip);

  if (!entry) {
    memoryStore.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (now - entry.timestamp > windowMs) {
    memoryStore.set(ip, { count: 1, timestamp: now });
  }

  if (entry.count >= max) {
    return false;
  }

  entry.count += 1;
  memoryStore.set(ip, entry);
  return true;
}
