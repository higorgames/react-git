import { useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../services/api";

import "./Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    async function handleLogin(event) {

        event.preventDefault();

        try {

            // Envia os dados para o Back-end
            const response = await api.post("/users/login", {
                email: email,
                password: senha
            });

            console.log(response.data);

            // Recebe o token enviado pelo Back-end
            const token = response.data.token;

            // Salva o token no navegador
            localStorage.setItem("token", token);

            alert("Login realizado com sucesso!");

            // Redireciona para a tela principal
            navigate("/home");

        } catch (error) {

            console.error(error);

            // Mensagem amigável em caso de erro
            alert("E-mail ou senha inválidos.");

        }
    }

    return (
        <main className="login">

            <div className="login-container">

                <div className="login-formulario">

                    <h2>Bem-vindo de volta!</h2>

                    <form onSubmit={handleLogin}>

                        <div className="campo">

                            <label htmlFor="email">
                                E-mail
                            </label>

                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                placeholder="Digite seu e-mail"
                                required
                            />

                        </div>

                        <div className="campo">

                            <label htmlFor="senha">
                                Senha
                            </label>

                            <input
                                type="password"
                                id="senha"
                                value={senha}
                                onChange={(event) =>
                                    setSenha(event.target.value)
                                }
                                placeholder="Digite sua senha"
                                required
                            />

                        </div>

                        <div className="opcoes-login">

                            <Link to="/recuperar-senha">
                                Esqueci minha senha
                            </Link>

                        </div>

                        <button
                            type="submit"
                            className="botao-login"
                        >
                            Entrar
                        </button>

                    </form>

                    <p className="cadastro">
                        Ainda não possui uma conta?

                        <Link to="/cadastro">
                            Criar conta
                        </Link>
                    </p>

                </div>


            </div>

        </main>
    );
}

export default Login;