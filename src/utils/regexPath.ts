export const regexPath = (path: string): string => {
  return (
    path
      .match(/[a-zA-Z]+/g) // Extract all words from the path
      ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
      .join(" ") || // Join with spaces
    ""
  ); // Fallback to an empty string if no match
};
