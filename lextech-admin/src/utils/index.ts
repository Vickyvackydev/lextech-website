function getRandomColors() {
  const colors = ["#CDEED3", "#79747E", "#F2DFA0", "#D5D5D5", "#DDEBDF"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getUploadDate(created_at: string): string {
  const createdDate = new Date(created_at);
  const now = new Date();

  const diffTime = now.getTime() - createdDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths =
    now.getMonth() -
    createdDate.getMonth() +
    12 * (now.getFullYear() - createdDate.getFullYear());

  if (diffDays === 0) {
    return "Uploaded today";
  }
  if (diffDays === 1) {
    return "Uploaded 1 day ago";
  }
  if (diffDays < 30) {
    return `Uploaded ${diffDays} days ago`;
  }
  if (diffMonths === 1) {
    return "Uploaded 1 month ago";
  }
  return `Uploaded ${diffMonths} months ago`;
}

function formatBackendText(rawText: string): string[] {
  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(rawText, "text/html");

  const paragraphs = Array.from(parsedHtml.querySelectorAll("p")).map(
    (p) => p.textContent?.trim() || ""
  );

  return paragraphs.filter((paragraph) => paragraph !== "");
}

export { getRandomColors, getUploadDate, formatBackendText };
