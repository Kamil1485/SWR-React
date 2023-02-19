import useSWR from 'swr';
import { useState } from 'react';
const endpoint = "http://localhost:4005/videos";

function Mutate() {
  
  const { data, mutate } = useSWR(endpoint);
const[newUser,setNewUser]=useState({id:"",title:"",author:""})
  const updateData = async (e) => {
    e.preventDefault();
mutate(prevData => [...prevData, newUser], false);
    setNewUser({id:"",title:"",author:""})
  }
console.log(newUser)
  return (
    <div>
    <form action="#" onSubmit={updateData}>
    <input type="text"  placeholder='id' value={newUser.id} onChange={(e)=>(setNewUser({...newUser,id:e.target.value}))}/>
    <input type="text"  placeholder='title' value={newUser.title} onChange={(e)=>(setNewUser({...newUser,title:e.target.value}))}/>
    <input type="text"  placeholder='author' value={newUser.author} onChange={(e)=>(setNewUser({...newUser,author:e.target.value}))}/>
    <button type='submit'>Veri Ekle</button>
    </form>
      { data && data.map(item => <p key={item.id}>{item.title}</p>) }
    </div>
  );
}

export default Mutate;
