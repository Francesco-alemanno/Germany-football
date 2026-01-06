import Bundesliga from "./componenti/Bundesliga";
import Bundesliga2 from "./componenti/Bundesliga2";
import ChampionsLeague from "./componenti/ChampionsLeague";
import DfbPokal from "./componenti/DfbPokal";
import HomePage from "./componenti/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/bundesliga" element={<Bundesliga></Bundesliga>}></Route>
        <Route path="/championsLeague" element={<ChampionsLeague></ChampionsLeague>}></Route>
        <Route path="/dfbpokal" element={<DfbPokal></DfbPokal>}></Route>
        <Route path="/bundesliga2" element= {<Bundesliga2></Bundesliga2>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
