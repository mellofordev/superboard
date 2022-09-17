import { useEffect,useState } from "react";
import {currentUser} from '../../utils/hooks/currentUser';
export default function Chat(props){
    let user_;
    let status_ ;
    const [partial,setPartial]=useState({});
    useEffect(()=>{
        const partial_=props.isloged;
        user_=partial_[0].user_name;
        status_ =partial_[0].status;
        setPartial(partial_[0]);
    },[])
    return(
        <div className="room">
            <div className="leftnav">
                <h1>nav</h1>
            </div>
            <div className="rightchat">
                <h1 className="title">Chat</h1>
                <p className="whois">your anonymous id :{partial.user_name}</p>
            
            <div className="chatarea">

            </div>
            <div className="chatinput">
                <input className="inputChat" placeholder="/type"/>
            </div>
            </div>
        </div>
    );
}