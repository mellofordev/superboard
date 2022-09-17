
import { useCallback, useEffect, useState } from 'react';
import Login from './components/Login';
import Chat from './components/Chat';
export default function Home() {
  const [isloged,setIsloged]=useState(null);
  const onHandle=useCallback((new_)=>{
    setIsloged(new_);
  },[])
  useEffect(()=>{
    setIsloged(localStorage.getItem('userdetail'));
    console.log('true',isloged);
  },[isloged])

  return (
    <div>
      {isloged==null?<Login isloged={isloged} onChange={onHandle}/>:(<Chat isloged={isloged} onChange={onHandle} />)}
     
    </div>
  )
}
