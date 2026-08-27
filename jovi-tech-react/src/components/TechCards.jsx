const techs = [
    { icone: "🧠", titulo: "IA Embarcada", desc: "Processamento no chip." },
    { icone: "🔭", titulo: "Zoom 100×", desc: "Sem perda de qualidade." },
    { icone: "⚡", titulo: "HDR Real", desc: "Exposição perfeita." },
    { icone: "🔒", titulo: "Privacidade", desc: "Dados no aparelho." },
];

function TechCards() {
    function handleClick(t) {
        alert(t.icone + " " + t.titulo + "\n\n" + t.desc);
    }

    return (
        <div id="cards">
            {techs.map((t, i) => (
                <div className="card" key={i} onClick={() => handleClick(t)}>
                    <p>{t.icone}</p>
                    <strong>{t.titulo}</strong>
                    <p>{t.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default TechCards;