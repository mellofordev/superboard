import { useEffect,useState } from "react";
import { supabase } from "../../utils/supabase";
import { uid } from "uid";
export default function Chat(props){
    const [message,setMessage]=useState();
    const [msgarr,setMsgArr]=useState([]);
    const uuid=uid(32);
    const [partial,setPartial]=useState(null);
    const onSend=()=>{
        const {data:datainfo,errorinfo}=supabase.from('msg').insert({id:uuid,message:message}).select();
        console.log(datainfo);
    }
    useEffect(()=>{
        
        
        setPartial(localStorage.getItem('userdetail'));
        console.log(partial);
       
    },[])
    useEffect(()=>{
     
        const real = supabase.from('msg')
        .on('INSERT',(payload)=>{
            setMsgArr((current)=>[...current,payload.new])
        }).subscribe();
        return ()=>{
            supabase.removeSubcription(real);
        }
    },[])

    return(
        <div className="room">
            <div className="leftnav">
                <h1>nav</h1>
            </div>
            <div className="rightchat">
                <h1 className="title">Chat</h1>
                <p className="whois">your anonymous id :{partial}</p>
            
            <div className="chatarea">
                {msgarr.map((i)=>{
                    return(
                        <h1>{i}</h1>
                    );
                })}
            </div>
            <div className="chatinput">
                <input className="inputChat" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="/type"/>
                <button onClick={()=>onSend()}>send</button>
            </div>
            </div>
        </div>
    );
}