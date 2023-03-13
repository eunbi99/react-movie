// import Button from "./Button";
// import styles from "./App.module.css";
import { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myDollar, setMyDollar] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  },[]);
  return (
    <div>
      <h1> 비트 코인! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong> 
      ) : (
        <select>
          {coins.map((coin) => (
            <option> 
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )};
    </div>
  );
}

export default App;
