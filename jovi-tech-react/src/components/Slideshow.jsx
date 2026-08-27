import { useState, useEffect } from "react";

const slides = [
  { img: "/images/slide1.jpg", titulo: "IA Multi-Frame", desc: "Fusão de frames para fotos sem borrão." },
  { img: "/images/slide2.jpg", titulo: "Modo Noturno", desc: "Nítido mesmo com pouca luz." },
  { img: "/images/slide3.jpg", titulo: "Macro Neural", desc: "Foco inteligente a milímetros." },
  { img: "/images/slide4.jpg", titulo: "Vídeo 8K", desc: "Estabilização óptica em tempo real." },
];

function Slideshow() {
  const [atual, setAtual] = useState(0);

  function mudarSlide(dir) {
    setAtual((prev) => (prev + dir + slides.length) % slides.length);
  }

  useEffect(() => {
    const intervalo = setInterval(() => mudarSlide(1), 4000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div id="slideshow">
      ...
    </div>
  );
}

export default Slideshow;


