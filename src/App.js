import logo from './logo.svg';
import './App.css';
import SummonerCard from './components/summonerCard';
import {useState, useEffect} from "react"


const API_KEY = "RGAPI-4b946da2-6e19-47ec-a749-9f4165d194b4"

const summoners = [
  {
    gameName: "MrsxClutch",
    tag: "NA1",
  },
  {
    gameName: "GreatxPressure",
    tag: "NA1",
  },
  {
    gameName: "ShipShape",
    tag: "NA1",
  },
  {
    gameName: "WhuppinStik",
    tag: "NA1"
  },
  {
    gameName: "BoomGhosted",
    tag: "NA1"
  },
]




//https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/MrsxClutch/NA1?api_key=RGAPI-4b946da2-6e19-47ec-a749-9f4165d194b4



function App() {
  const [summonersPUUID, setSummonersPUUID] = useState("")

  return (
    <div className="App">
      <h1>Race to Next Rank</h1>
      <div className="leaderboard">
        {summoners.map((summoner, index) => {
          return <SummonerCard summoner={summoner.gameName} index={index}></SummonerCard>})}
      </div>
      <h1>Peak Rank</h1>
      <div className="tableBox">
        <table>
          <thead>
            <tr><th>Summoner</th> <th>Peak Rank</th></tr>
          </thead>
          <tbody>
            <tr><td>MrsxClutch</td><td>Silver 1 20 LP</td></tr>
            <tr><td>GreatxPressure</td><td>Silver 1 20 LP</td></tr>
            <tr><td>WhuppinStik</td><td>Silver 1 20 LP</td></tr>
            <tr><td>ShipShape</td><td>Silver 1 20 LP</td></tr>
            <tr><td>BoomGhosted</td><td>Silver 1 20 LP</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
