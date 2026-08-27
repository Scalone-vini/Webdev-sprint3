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
      <div id="slide-conteudo">
        <img src={slides[atual].img} style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} />
        <div style={{ padding: "12px" }}>
          <strong>{slides[atual].titulo}</strong>
          <p>{slides[atual].desc}</p>
        </div>
      </div>
      <div>
        <button onClick={() => mudarSlide(-1)}>← Anterior</button>
        <span>{atual + 1} / {slides.length}</span>
        <button onClick={() => mudarSlide(1)}>Próximo →</button>
      </div>
    </div>
  );
}

export default Slideshow;