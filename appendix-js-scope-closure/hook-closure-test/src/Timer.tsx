import { useEffect, useState } from "react";
import { useTimer } from "./hooks/useTimer"

type Props = { seconds : number, message:string }

const Timer = (props: Props) => {
    const [ message, setMessage ] = useState<string>("");

    const callback = ()=>{
        setMessage(props.message);
        setTimeout(()=>setMessage(""), 5000);
    }
    const { time, timeFormat, start, stop, setupTimer } = useTimer(props.seconds, callback);

    useEffect(()=>{
        setupTimer();
    }, [])

    return (
        <div style={{ border:"solid 1px gray", padding:"10px" }}>
            <div>
                <h3>{timeFormat(time)}</h3>
                <p>{message}</p>
            </div>
            <button onClick={()=>start()}>시작</button>
            <button onClick={()=>stop()}>정지</button> 
            <button onClick={()=>setupTimer()}>시간 재설정</button>      
        </div>
    )
}

export default Timer