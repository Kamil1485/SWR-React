import React,{useState} from 'react'
import {fetcher2} from "./index"

const App2 = () => {
    const [data,setData]=useState([]);
    fetcher2("http://localhost:4005/videos")
    .then(data => setData(data))
    return (
    <div>{data.map((video)=>(<div>{video.title}</div>))}</div>
  )
}

export default App2