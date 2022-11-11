import React ,{ useEffect }  from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.apilayer.com/exchangerates_data/symbols'
var myHeaders = new Headers();
myHeaders.append("apikey", "API_KEY a securiser");
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
function App() {
  
useEffect(() => {
  fetch(BASE_URL,requestOptions)
  .then(res => res.json())
  .then(data => console.log(data))
},[])
// TODO: faire avec exchangeRateAPI


fetch("https://api.apilayer.com/exchangerates_data/convert?to=EUR&from=GBP&amount=10", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyRow/>
    <div>=</div>
      <CurrencyRow/>
    </>
  );
}

export default App;
