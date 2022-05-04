import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [bitCoinCost, setbitCoinCost] = useState(0);
  const [bitCoinNum, setbitCoinNum] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setbitCoinCost(json[0].quotes.USD.price);
      });
      
  }, []);

  const handleInput = (event) => {
    setDollar(event.target.value);
    if (bitCoinCost !== 0) {
      setbitCoinNum( Number(event.target.value) / Number(bitCoinCost));
    } else {
      setbitCoinNum(null);
    }
  } 

  const onChange = (event) => { 
    let tokens = event.target.value.split(' ');
    setbitCoinCost(Number(tokens[3]));
    if (bitCoinCost != 0) {
      setbitCoinNum( Number(dollar) / Number(tokens[3]));
    } else {
      setbitCoinNum(null);   
    }
  }
  
  return (
    <div>
      <h1>Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : <select onChange={onChange}>
        {coins.map((coin, index) => ( 
          <option key={index}>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>}
      
      <hr></hr>
      <input 
        onChange={handleInput}
        value={dollar} 
        type="text"/>
      
      
      <h3>Dollar : {dollar} $</h3>
      <h3>To bitcoin : {bitCoinNum}</h3>

    </div>
  )
}

export default App;
 