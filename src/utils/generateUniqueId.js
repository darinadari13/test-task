export function generateUniqueId() {
  const randomPart = Math.random().toString(16).substring(2, 8);

  const timestampPart = new Date().getTime().toString(16);

  return randomPart + timestampPart;
}
