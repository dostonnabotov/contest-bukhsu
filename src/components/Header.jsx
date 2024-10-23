import React from "react";
import { Logo } from "./Icons";

const availableLanguages = [
  {
    name: "English",
    short: "en",
    flag: "/assets/flag-us.png",
  },
  {
    name: "Français",
    short: "fr",
    flag: "/assets/flag-fr.png",
  },
  {
    name: "Deutsch",
    short: "de",
    flag: "/assets/flag-de.png",
  },
];

const Header = ({ language, setLanguage }) => {
  const currentLanguage = availableLanguages.find(
    (lan) => lan.short === language
  );

  return (
    <header className="header">
      <Logo />
      <div className="language-switch">
        <label htmlFor="language">
          <img
            src={currentLanguage.flag}
            alt={`${currentLanguage.name} flag`}
          />
        </label>
        <select id="language" onChange={(e) => setLanguage(e.target.value)}>
          {availableLanguages.map((lan) => (
            <option key={lan.short} value={lan.short}>
              {lan.name}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};

export default Header;
