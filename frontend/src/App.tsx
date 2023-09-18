import { About, Footer, Header, Skills, Work } from "./container";
import { NavBar } from "./components";
import "./App.scss";
import "./services/i18n";
import Freelancer from "./container/freelancer/Freelancer";

function App() {
  // const {i18n:{changeLanguage, language}} = useTranslation();
   
  // const [currentLanguage, setCurrentLanguage] = useState(language)
   
  // const handleChangeLanguage=() => {
  //   const newLanguage = currentLanguage === "en" ? "pt": 'en'
  //   changeLanguage(newLanguage)
  //   setCurrentLanguage(newLanguage)
  // }


  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Freelancer />
      <Work />
      <Skills />      
      {/* <Testimonial /> */}
      <Footer />     
    </div>
  );
}

export default App;
