import { useState, useEffect } from "react";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import TechCards from "./components/TechCards";
import ContactForm from "./components/ContactForm";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";

function App() {
  const [modalAberto, setModalAberto] = useState(false);

  function handleExplorar() {
    const res = prompt("Qual tecnologia quer explorar?\n1 - IA Multi-Frame\n2 - Modo Noturno\n3 - Macro Neural\n4 - Vídeo 8K");
    const mapa = { "1": "IA Multi-Frame", "2": "Modo Noturno", "3": "Macro Neural", "4": "Vídeo 8K" };
    if (mapa[res]) {
      alert("Você escolheu: " + mapa[res]);
    } else if (res !== null) {
      alert("Opção inválida. Digite 1, 2, 3 ou 4.");
    }
  }

  useEffect(() => {
    function fecharComEsc(e) {
      if (e.key === "Escape") setModalAberto(false);
    }
    document.addEventListener("keydown", fecharComEsc);
    return () => document.removeEventListener("keydown", fecharComEsc);
  }, []);

  return (
    <div>
      <Header onExplorar={handleExplorar} onAbrirLogin={() => setModalAberto(true)} />
      <Slideshow />
      <TechCards />
      <ContactForm />
      <LoginModal aberto={modalAberto} onFechar={() => setModalAberto(false)} />
      <Footer />
    </div>
  );
}

export default App;