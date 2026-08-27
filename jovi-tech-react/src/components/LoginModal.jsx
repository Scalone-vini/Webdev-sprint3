import { useState } from "react";

const usuarios = { admin: "jovi2026", aluno: "facul123" };

function LoginModal({ aberto, onFechar }) {
    const [user, setUser] = useState("");
    const [senha, setSenha] = useState("");
    const [msg, setMsg] = useState("");
    const [cor, setCor] = useState("black");

    function fazerLogin() {
        if (!user || !senha) {
            setMsg("Preencha os campos.");
            setCor("red");
            return;
        }

        if (usuarios[user] === senha) {
            setMsg("Bem-vindo, " + user + "!");
            setCor("green");
            setTimeout(() => {
                onFechar();
                alert("Olá, " + user + "! Você está logado.");
            }, 800);
        } else {
            setMsg("Usuário ou senha incorretos.");
            setCor("red");
        }
    }

    if (!aberto) return null;

    return (
        <div id="modal" className="aberto">
            <div id="modal-box">
                <button id="fechar-modal" onClick={onFechar}>✕</button>
                <h3>Login</h3>

                <label htmlFor="l-user">Usuário</label>
                <input type="text" id="l-user" placeholder="admin" value={user} onChange={(e) => setUser(e.target.value)} />

                <label htmlFor="l-senha">Senha</label>
                <input type="password" id="l-senha" placeholder="••••••" value={senha} onChange={(e) => setSenha(e.target.value)} />

                <button onClick={fazerLogin}>Entrar</button>
                <p id="msg-login" style={{ color: cor }}>{msg}</p>
            </div>
        </div>
    );
}

export default LoginModal;