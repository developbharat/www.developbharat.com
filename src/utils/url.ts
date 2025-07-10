export function joinUrl(...parts: (string | number)[]): string {
  if (parts.length === 0) return "";

  // Convert all parts to strings, trim whitespace, and filter out empty parts
  const stringParts = parts
    .map((part) => String(part).trim())
    .filter((part) => part.length > 0);

  if (stringParts.length === 0) return "";

  // Join all parts with a single slash
  let joined = stringParts.join("/");

  // Replace multiple consecutive slashes with single slash
  joined = joined.replace(/\/+/g, "/");

  // Remove leading slashes unless it's an absolute path (starting with /)
  if (!stringParts[0].startsWith("/") && joined.startsWith("/")) {
    joined = joined.substring(1);
  }

  // Handle trailing slashes based on last part
  const lastPart = stringParts[stringParts.length - 1];
  if (!lastPart.endsWith("/") && joined.endsWith("/")) {
    joined = joined.slice(0, -1);
  } else if (lastPart.endsWith("/") && !joined.endsWith("/")) {
    joined += "/";
  }

  return joined;
}
