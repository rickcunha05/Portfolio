import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { NavBar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <About />
      <Footer />
      <Header />
      <Skills />
      <Testimonial />
      <Work />
    </div>
  );
}

export default App;
