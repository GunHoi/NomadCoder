import {useEffect, useState} from "react"
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState("");
  const [selectedBit, setSelectedBit] = useState("");
  const [usdToBit, setUsdToBit] = useState("");
  const handleChangeSelect = (event) => { //select    
    setSelectedBit(event.target.value);
  }
  const onChange = (event)=>{ //input
    setUsd(event.target.value);
  }
  const onSubmit = (event)=>{
    event.preventDefault();
    if(selectedBit===''){
      setUsdToBit(usd/coins[0].quotes.USD.price);
    }
    else{
      setUsdToBit(usd/selectedBit);
    }
  }
  useEffect (()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json()
    .then((json) => {
      setCoins(json);
      setLoading(false);
    }));
  }, []);
  return (
    <div >
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : 
      <select onChange={handleChangeSelect}>
        {coins.map((coin) => <option key={coin.id} value={coin.quotes.USD.price}> {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}
      </select>}
      
      <hr/>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={usd} type="text" placeholder="USD $ "></input>
        <button>Convert To Bit</button>
      </form>
      <h2>{usdToBit}</h2>
    </div>
  );
}

export default App;
