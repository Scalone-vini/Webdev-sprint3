import { useState } from "react";

const slides = [
  { img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800", titulo: "IA Multi-Frame", desc: "Fusão de frames para fotos sem borrão." },
  { img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800", titulo: "Modo Noturno", desc: "Nítido mesmo com pouca luz." },
  { img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800", titulo: "Macro Neural", desc: "Foco inteligente a milímetros." },
  { img: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800", titulo: "Vídeo 8K", desc: "Estabilização óptica em tempo real." },
];

function Slideshow() {
  const [atual, setAtual] = useState(0);

  function mudarSlide(dir) {
    setAtual((prev) => (prev + dir + slides.length) % slides.length);
  }

  const slide = slides[atual];

  return (
    <div id="slideshow">
      <div id="slide-conteudo">
        <img src={slide.img} style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} />
        <div style={{ padding: "12px" }}>
          <strong>{slide.titulo}</strong>
          <p>{slide.desc}</p>
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


import { useState, useEffect } from "react";


function Slideshow() {
  const [atual, setAtual] = useState(0);

  function mudarSlide(dir) {
    setAtual((prev) => (prev + dir + slides.length) % slides.length);
  }

  useEffect(() => {
    const intervalo = setInterval(() => mudarSlide(1), 4000);
    return () => clearInterval(intervalo);
  }, []);

}