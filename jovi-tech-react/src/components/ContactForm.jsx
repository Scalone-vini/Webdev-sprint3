import { useState } from "react";

function ContactForm() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [erros, setErros] = useState({ nome: false, email: false, msg: false });

    function enviarForm(e) {
        e.preventDefault();

        const nomeInvalido = nome.trim().length < 2;
        const emailInvalido = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
        const msgInvalida = mensagem.trim().length < 10;

        setErros({ nome: nomeInvalido, email: emailInvalido, msg: msgInvalida });

        if (nomeInvalido || emailInvalido || msgInvalida) return;

        const mensagens = JSON.parse(localStorage.getItem("jovitech-mensagens") || "[]");
        mensagens.push({
            id: Math.floor(Math.random() * 1000000),
            nome: nome.trim(),
            email: email.trim(),
            mensagem: mensagem.trim(),
            data: new Date().toISOString(),
        });
        localStorage.setItem("jovitech-mensagens", JSON.stringify(mensagens));

        alert("Mensagem enviada! Obrigado, " + nome.trim().split(" ")[0] + ".");
        setNome("");
        setEmail("");
        setMensagem("");
    }

    return (
        <div id="contato">
            <form onSubmit={enviarForm}>
                <h2>Fale Conosco</h2>

                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                {erros.nome && <span className="erro" style={{ display: "block" }}>Preencha o nome.</span>}

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                {erros.email && <span className="erro" style={{ display: "block" }}>E-mail inválido.</span>}

                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" placeholder="Escreva aqui..." value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
                {erros.msg && <span className="erro" style={{ display: "block" }}>Mínimo de 10 caracteres.</span>}

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default ContactForm;