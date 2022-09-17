import { useEffect,useState } from "react"
export default function currentUser(){
    const [user,setUser]=useState([]);
    
    useEffect(()=>{
         const partial_ = JSON.parse(localStorage.getItem('userdetail'));
         setUser(partial_);
    },[user]);
    return user;


}