import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Homepage.css";

// import immagini (CORRETTO per Vite)
import bundesligaLogo from "../assets/germany_bundesliga.svg";
import championsLogo from "../assets/championsLeague.svg";
import dfbLogo from "../assets/dfbpokal.svg";

function HomePage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.openligadb.de/getmatchdata/bl1/2020/9"
        );

        if (!response.ok) {
          throw new Error("HTTP error");
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <p className="error">ERRORE NEL FETCH DEI DATI</p>;
  if (!data.length) return <p className="loading">Caricamento in corso...</p>;

  return (
    <div className="homePage">
      <h1>Football zone</h1>
      <h6>Scopri i risultati di questa settimana!</h6>

      <Link to="/bundesliga" style={{ textDecoration: "none", color: "black" }}>
        <div className="results-home">
          <img src={bundesligaLogo} alt="Bundesliga logo" />
          <h6>Scopri i risultati della Bundesliga!</h6>
        </div>
      </Link>

      <Link to="/championsLeague" style={{ textDecoration: "none", color: "black" }}>
        <div className="results-home">
          <img src={championsLogo} alt="Champions League logo" />
          <h6>Scopri i risultati della Champions League!</h6>
        </div>
      </Link>

      <Link to="/dfbpokal" style={{ textDecoration: "none", color: "black" }}>
        <div className="results-home">
          <img src={dfbLogo} alt="DFB Pokal logo" />
          <h6>Scopri i risultati della DFB Pokal!</h6>
        </div>
      </Link>

      <Link to="/bundesliga2" style={{ textDecoration: "none", color: "black" }}>
        <div className="results-home">
          <img src={bundesligaLogo} alt="Bundesliga 2 logo" />
          <h6>Scopri i risultati della Bundesliga 2!</h6>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
