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