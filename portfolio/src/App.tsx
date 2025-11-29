import {
  Navbar,
  Hero,
  About,
  TechStack,
  Projects,
  Experience,
  Certificates,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
