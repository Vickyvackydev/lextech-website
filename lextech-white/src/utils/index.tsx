function formatBackendText(rawText: string): string[] {
  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(rawText, "text/html");

  const paragraphs = Array.from(parsedHtml.querySelectorAll("p")).map(
    (p) => p.textContent?.trim() || ""
  );

  return paragraphs.filter((paragraph) => paragraph !== "");
}

export { formatBackendText };
