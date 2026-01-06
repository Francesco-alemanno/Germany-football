import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Homepage.css";

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

      <Link style={{textDecoration:'none', color:'black'}} to={"/bundesliga"}>
        <div className="results-home">
          <img
            src=".\src\assets\germany_bundesliga.svg"
            alt="logo-bundesliga"
          />
          <h6>Scopri i risultati della bundesliga!</h6>
        </div>
      </Link>
      <Link style={{textDecoration:'none', color:'black'}} to={"/championsLeague"}>
        <div className="results-home">
          <img
            src=".\src\assets\championsLeague.svg"
            alt="logo-bundesliga"
          />
          <h6>Scopri i risultati della Champions League!</h6>
        </div>
      </Link>
      <Link style={{textDecoration:'none', color:'black'}} to={"/dfbpokal"}>
        <div className="results-home">
          <img
            src=".\src\assets\dfbpokal.svg"
            alt="logo-dfbPokal"
          />
          <h6>Scopri i risultati della DFB POKAL!</h6>
        </div>
      </Link>
      <Link style={{textDecoration:'none', color:'black'}} to={"/bundesliga2"}>
        <div className="results-home">
          <img
            src=".\src\assets\germany_bundesliga.svg"
            alt="logo-dfbPokal"
          />
          <h6>Scopri i risultati della Bundesliga 2!</h6>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
