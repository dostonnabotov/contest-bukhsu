import { useState } from "react";
import Downloads from "./components/Downloads";
import Header from "./components/Header";
import Guidelines from "./components/Guidelines";
import { BookIcon, PencilIcon } from "./components/Icons";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="container">
      <Header language={language} setLanguage={setLanguage} />
      <div className="heading">
        <h1 className="main-title">Writing and Reading Contest</h1>
        <p className="subtitle">(Dean Cup) BukhSU</p>
        <div className="floating-icon">
          <PencilIcon />
        </div>
        <div className="floating-icon">
          <BookIcon />
        </div>
      </div>
      <Guidelines language={language} />
      <Downloads language={language} />
    </div>
  );
}

export default App;
