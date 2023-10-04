import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";
import Section5 from "./components/Section5";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section5 />
        <Section4 />
      </main>
      <footer className="text-center">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
