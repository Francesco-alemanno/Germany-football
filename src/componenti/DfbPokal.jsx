import { useEffect, useState } from "react";
import "../css/Results.css";
import { Link } from "react-router-dom";

function DfbPokal() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const fetchName = "https://api.openligadb.de/getmatchdata/dfb/2025/4";

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await fetch(fetchName);
        if (!response.ok) {
          throw new Error("HTTP error");
        }
        const json= await response.json()
        setData(json)
      } catch (error) {
        console.error(err);
        setError(err.message);
      }
    };
      fetchFunction();
  });
    if (error) return <p className="error">ERRORE NEL FETCH DEI DATI</p>;
  if (!data.length) return <p className="loading">Caricamento in corso...</p>;
  return(
 <div className="homepage">
      <div className="homeBack">
        {" "}
        <Link to={"/"}>Ritorna alla home</Link>
      </div>
      <h2 className="title">⚽ DFB POKAL - QUARTI DI FINALE</h2>
      <div className="matches">
        {data.map((partita, index) => {
          const risultato =
            partita.matchResults && partita.matchResults.length > 0
              ? `${partita.matchResults[0].pointsTeam1} - ${partita.matchResults[0].pointsTeam2}`
              : "Non disponibile";
          return (
            <div className="match-card" key={index}>
              <div className="team">
                <img
                  src={partita.team1.teamIconUrl}
                  alt={partita.team1.teamName}
                />
                <p>{partita.team1.teamName}</p>
              </div>
              <div className="vs">
                vs
                <p>{risultato}</p>
              </div>
              <div className="team">
                <img
                  src={partita.team2.teamIconUrl}
                  alt={partita.team2.teamName}
                />
                <p>{partita.team2.teamName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>

  )
  
}
export default DfbPokal;
