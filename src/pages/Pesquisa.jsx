import { useState } from "react";
import Navbar from "../components/Navbar";
import "./Pesquisa.css";

function Pesquisa() {
  const [pesquisa, setPesquisa] = useState("");

  const plantas = [
  {
    id: 1,
    nome: "Cacto Orelha de Coelho",
    preco: "R$ 35.90",
    imagem: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 2,
    nome: "Cacto Estrela",
    preco: "R$ 42.50",
    imagem: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 3,
    nome: "Cacto Mandacaru",
    preco: "R$ 55.00",
    imagem: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 4,
    nome: "Suculenta Jade",
    preco: "R$ 29.90",
    imagem: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 5,
    nome: "Cacto Bola",
    preco: "R$ 38.90",
    imagem: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 6,
    nome: "Suculenta Echeveria",
    preco: "R$ 31.50",
    imagem: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
];

  const plantasFiltradas = plantas.filter((planta) =>
    planta.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div className="pagina-pesquisa">
      <Navbar />

      <main className="conteudo-pesquisa">
        <h1>Encontre sua planta</h1>

        <div className="barra-pesquisa">
          <input
            type="text"
            placeholder="Digite o nome da planta..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />

          <button type="button">🔍</button>
        </div>

        <div className="grade-plantas">
          {plantasFiltradas.map((planta) => (
            <div className="card-planta" key={planta.id}>
              <img src={planta.imagem} alt={planta.nome} />

              <div className="dados-planta">
                <h2>{planta.nome}</h2>
                <p>{planta.preco}</p>
              </div>
            </div>
          ))}
        </div>

        {plantasFiltradas.length === 0 && (
          <p className="sem-resultados">
            Nenhuma planta encontrada.
          </p>
        )}
      </main>
    </div>
  );
}

export default Pesquisa;