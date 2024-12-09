import { useState } from "react";

function formatBackendText(rawText: string): string[] {
  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(rawText, "text/html");

  const paragraphs = Array.from(parsedHtml.querySelectorAll("p")).map(
    (p) => p.textContent?.trim() || ""
  );

  return paragraphs.filter((paragraph) => paragraph !== "");
}

function useClipboard() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (err) {
      console.error("Failed to copy: ", err);
      return false;
    }
  };

  // // Function to paste text from the clipboard
  // const pasteFromClipboard = async () => {
  //   try {
  //     const text = await navigator.clipboard.readText();
  //     return text; // Success
  //   } catch (err) {
  //     console.error("Failed to paste: ", err);
  //     return null; // Failure
  //   }
  // };

  return { copyToClipboard, copiedText };
}

export { formatBackendText, useClipboard };
