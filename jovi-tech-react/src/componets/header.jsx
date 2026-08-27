function Header({ onAbrirLogin, onExplorar }) {
  function irPara(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <h1>Jovi Tech — Câmeras</h1>
      <p>Tecnologia de câmeras inteligentes para smartphones Jovi.</p>

      <nav>
        <button onClick={() => irPara("slideshow")}>Galeria</button>
        <button onClick={() => irPara("contato")}>Contato</button>
        <button onClick={onAbrirLogin}>Entrar</button>
        <button onClick={onExplorar}>Explorar</button>
      </nav>
    </>
  );
}

export default Header;