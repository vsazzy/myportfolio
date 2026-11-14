import "./App.css";
import Nav from "./components/Nav";
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Inference,
  Stack,
  Work,
  Writing,
} from "./components/Sections";

function App() {
  return (
    <div className="site">
      <a className="skip" href="#work">
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Inference />
        <Work />
        <Experience />
        <Stack />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
