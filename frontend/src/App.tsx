import { About, Footer, Header, Skills, Work } from "./container";
import { NavBar } from "./components";
import {useTranslation} from 'react-i18next'
import "./App.scss";
import "./services/i18n";
import { useState } from "react";

function App() {
  const {i18n:{changeLanguage, language}} = useTranslation();
   
  const [currentLanguage, setCurrentLanguage] = useState(language)
   
  const handleChangeLanguage=() => {
    const newLanguage = currentLanguage === "en" ? "pt": 'en'
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }


  return (
    <div className="app">
       <button type="button" onClick={handleChangeLanguage}> Change Language</button>
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />     
    </div>
  );
}

export default App;
