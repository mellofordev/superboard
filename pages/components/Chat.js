import { useEffect,useState } from "react";

export default function Chat(props){

    const [partial,setPartial]=useState({});
    useEffect(()=>{
        
        setPartial(props.isloged);
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

            </div>
            <div className="chatinput">
                <input className="inputChat" placeholder="/type"/>
            </div>
            </div>
        </div>
    );
}