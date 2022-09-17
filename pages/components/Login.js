import {useEffect, useState } from 'react';
import {uid} from 'uid';
import {supabase} from '../../utils/supabase';

export default function Login(props){
    const [text,setText]=useState('');
    const uuid = uid(32);
    const [user,setUser]=useState('');
    const onlogin=async ()=>{
      if(text!=''){
        
        const {data:dataInfo,error:errorinfo} =await supabase.from('users').insert([{id:uuid,user_name:text,status:'ONLINE'}]).select();
        if(errorinfo){
          console.log(errorinfo);
          alert(errorinfo.details);
        }else if(dataInfo!=undefined){
           console.log(dataInfo[0].user_name);
           props.onChange(localStorage.setItem('userdetail',JSON.stringify(dataInfo[0].user_name)));
           
        }
      }else{
        alert("Enter a username");
  
      }
      
  
    }
    return(
        <div>
         <div className='main'>
          <h1>Superboard</h1>
          <div className='row'>
          
          <input className='input' onChange={(e)=>{setText(e.target.value)}} value={text} placeholder='Enter a username'/>
          <button onClick={()=>{onlogin()}} className='enterbutton'>enter</button>
          </div>
          </div>
        </div>
    );
}