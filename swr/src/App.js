import axios from "axios";
import React,{useState} from "react";
import useSWR from 'swr'
import './App.css';
import App2 from "./App2";
import Pagination from "./Pagination";
import Mutate from "./Mutate";
const endpoint="http://localhost:4005/videos";
//istek yapacağımız Url adresi
//1.key yani url adresi,2.opsiyonel  fonksiyon parametre alır,
//3.olarak options parametresi verebilirsin default tanımlı olan özellikleri değiştirmek için {name:...} gibi değiştir.
//fetcher fonksiyonu endpointi parametre olarak alır.

const App3=()=>{
  const {data,error}=useSWR(endpoint);
 return(
  <div className="App3" style={{backgroundColor:"#37e5e5"}}>
    {data.map((user)=>(<p style={{color:"white"}} key={user.id}>{user.author}</p>))}
  </div>
 )
}


function App() {
  const[shouldFetch,setShouldFetch]=useState(false);


//const { data,isValidating,error } = useSWR(endpoint,fetcher); //1

/*
const fetcherAxios=url=>axios.get(url).then(res=>res.data)
const { data,isValidating,error } = useSWR(endpoint,fetcherAxios,{//2
  refreshInterval:1//1s aralıklarla render eder yani sayfayı
});
*/

/*
const { data,isValidating,error } = useSWR(endpoint);
console.log(data)
console.log(isValidating)
*/
//Conditional fetching
const { data,error,mutate} = useSWR(()=>shouldFetch ? endpoint : null)
const veri=useSWR(()=>shouldFetch ? endpoint : null)
console.log(mutate )
if (error) return <h2>{error}</h2>
  return (
 
    <div className="App" style={{backgroundColor:"#428ace"}}>

{ shouldFetch ?<button onClick={()=>setShouldFetch(false)}>Gizle</button>
:<button onClick={()=>setShouldFetch(true)}>Getir</button>
}
    {data && data.map((video)=>{
      return <div style={{color:"white"}} key={video.id}>
        <p>{video.title}</p>
      </div>
    })}
   

  <div>
<h1>Pagination</h1>
  <Pagination/>
  </div>
  <div>
    <h1>Mutate</h1>
    <Mutate/>
  </div>
    </div>
  );
}

export default App;
