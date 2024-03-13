import { useState } from "react";
import "./App.css";
import Watch from "./components/Watch/Watch";
import { useEffect } from "react";

function App() {
//  const watches = [
//    { id: 1, name: "Apple Watch Series 7", price: 399 },
//    { id: 2, name: "Samsung Galaxy Watch 4", price: 299 },
//    { id: 3, name: "Fitbit Versa 3", price: 229 },
//    { id: 4, name: "Garmin Forerunner 945", price: 599 },
//    { id: 5, name: "Xiaomi Mi Watch", price: 129 },
//  ];
const [watches,setWatches]=useState([])
useEffect(()=>{
  fetch(
    "https://raw.githubusercontent.com/shawnislamice/watches-data/main/watches.json"
  )
    .then((res) => res.json())
    .then((data) => setWatches(data));
})  
return (
    <>
      <h1>Shawon Islam</h1>
      {
        watches.map((watch)=><Watch watch={watch} key={watch.id}></Watch>)
      }
    </>
  );
}

export default App;
