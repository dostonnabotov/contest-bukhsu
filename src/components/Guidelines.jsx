import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Guidelines = ({ language }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/content/${language}/guidelines.md`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Failed to fetch markdown content: ${res.statusText}`
          );
        }
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => console.error("Error loading markdown content:", err));
  }, [language]);

  return (
    <div>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
};

export default Guidelines;
