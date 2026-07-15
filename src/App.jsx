import Header from "./components/Header.jsx";
import HeroImg from "./components/HeroImg.jsx";
import Features from "./components/Features.jsx";
import Memories from "./components/Memories.jsx"
import Stories from './components/Stories.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <HeroImg heroImg="/italianMan3.png" />
      <Features />
      <Memories />
      <Stories />      
      <Footer />
    </>
  );
}

export default App;
