import Button from "./Button";
import { DownloadIcon } from "./Icons";

const Downloads = ({ language }) => {
  const downloadLinks = {
    en: "/downloads/guidelines-en.pdf",
    fr: "/downloads/guidelines-fr.pdf",
    de: "/downloads/guidelines-de.pdf",
  };

  return (
    <div>
      <h2>Download Guidelines</h2>
      <Button
        as="link"
        href={downloadLinks[language]}
        target="_blank"
        rel="noopener noreferrer"
      >
        <DownloadIcon />
        <span>Download Guidelines ({language.toUpperCase()})</span>
      </Button>
    </div>
  );
};

export default Downloads;