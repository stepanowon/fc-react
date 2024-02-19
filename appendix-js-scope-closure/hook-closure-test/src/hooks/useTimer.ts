import { useEffect, useState } from "react"

const useTimer = (initSecs:number, callback:()=>void) => {
    const [seconds] = useState<number>(initSecs);
    const [time, setTime] = useState<number>(seconds*100);
    const [handle, setHandle] = useState<number>();

    useEffect(()=> {
        if (time < 0) {
            setTime(()=>seconds*100);
            clearInterval(handle);
            callback ? callback() : ""
        }
    }, [time])

    const setupTimer = () => {  
        setTime(()=>seconds*100);
        clearInterval(handle);
    }

    const start = () => {
        let handle1 = setInterval(() => {
            setTime((time)=>time-1);
        }, 10);
        setHandle(handle1);
    }

    const pause = () => {
        clearInterval(handle);
    }

    const stop = () => {
        clearInterval(handle);
        setTime(()=>seconds*100);
    }

    const timeFormat = (time:number)=>{
        let t:string = time+"";
        let seconds = t.substring(0, t.length-2) ;
        seconds = seconds ? seconds : "0" 
        let millis = t.substring(t.length-2)
        return `${seconds}:${millis}`;
    }

    return { time, timeFormat, setupTimer, start, pause, stop };
}

export { useTimer };