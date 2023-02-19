import React,{useState} from "react";
import useSWR from 'swr'
const endpoint="http://localhost:4005/videos";
const Pagination = () => {
    const[pageIndex,setPageIndex]=useState(1);
    const {data}=useSWR(`http://localhost:4005/videos/${pageIndex}`)
    console.log(data)
const handleOperator=(page,operation)=>{
    console.log(pageIndex)
if(operation==="i"){
    if(pageIndex>4){
        setPageIndex(1);
    }
    else{
        setPageIndex(page)
    }
}

else{
  
console.log(pageIndex)
        if(pageIndex<2){
            setPageIndex(5);
        }
        else{
            setPageIndex(page);
        }

    }
  
}

    return <div>
  <button onClick={()=>handleOperator(pageIndex+1,"i")}>Next</button>
  <button onClick={()=>handleOperator(pageIndex-1,"d")}>Prev</button>




  </div>
    
  


}

export default Pagination