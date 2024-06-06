import logo from '../logo.svg';
import './summonerCard.css'

function SummonerCard(props) {
    const currRank = "bronze IV 30 lp";
    const nextRank = "370 lp";
    const summonerIcon = logo;
    return (
        <div className="summonerBox">
            <p className="textStyle"><b>{props.index + 1}.</b> {props.summoner}</p>
            <p className="textStyle">{currRank}</p>
            <p className="textStyle">{nextRank}</p>
            <img src={summonerIcon} alt="" width={100}/>
        </div>
    )
}

export default SummonerCard