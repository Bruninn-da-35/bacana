import React from "react";

function App() {
  const games = [
    { id: 1, name: "Gears of War", releaseDate: "2006", description: "Primeiro jogo da série onde Marcus Fenix lidera os COGs contra os Locust." },
    { id: 2, name: "Gears of War 2", releaseDate: "2008", description: "Continuação direta, trazendo batalhas mais intensas e uma exploração mais profunda do mundo." },
    { id: 3, name: "Gears of War 3", releaseDate: "2011", description: "O final épico da trilogia original com a batalha decisiva contra os Locust." },
    { id: 4, name: "Gears of War 4", releaseDate: "2016", description: "Um novo começo para a saga, com JD Fenix e uma nova ameaça." },
    { id: 5, name: "Gears 5", releaseDate: "2019", description: "Kait Diaz assume o protagonismo para descobrir a verdade sobre sua conexão com os Locust." },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", textAlign: "center" }}>
      <h1>História de Gears of War</h1>
      <p>
        *Gears of War* é uma série de jogos de tiro em terceira pessoa que explora o conflito entre os humanos de Sera e uma raça subterrânea conhecida como Locust. A franquia é conhecida por sua narrativa intensa, personagens icônicos e jogabilidade inovadora.
      </p>
      <h2>Jogos da Série</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {games.map((game) => (
          <li key={game.id} style={{ margin: "20px 0", border: "1px solid #ccc", borderRadius: "8px", padding: "15px" }}>
            <h3>{game.name} ({game.releaseDate})</h3>
            <p>{game.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
