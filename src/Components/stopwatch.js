import React, { useEffect, useState } from "react";
import './stopwatch.css';

export default function Stopwatch(){

    const [sec,setSec] = useState(0);
    const [run,setRun] = useState(false);

    useEffect(()=>{
    let interval;
      if(run){
        interval = setInterval(()=>{
            setSec(pre=>pre+1);
        },1000)
      }
      
      return ()=>clearInterval(interval);
    },[run])

    const formatedtime = (totalsec) => {
        const minutes = String(Math.floor(totalsec/60)).padStart(2,'0');
        const seconds = String(totalsec%60).padStart(2,'0');

        return `${minutes}:${seconds}`;
    }

    const handlerun = () =>{
        setRun(!run);
    }
    const handleReset = () => { 
        setRun(false);
        setSec(0); 
    };

    return(
        <>
            <div className="main d-flex align-items-center justify-content-center">
                <h1 className="title">Stopwatch</h1>
                <div className="box d-flex align-items-center justify-content-center">
                    <div>
                        <p className="display-4"><i className="fa-regular fa-stopwatch me-3"></i>{formatedtime(sec)}</p>
                        <div className="d-flex align-items-center justify-content-center mt-4 control">
                            <h1 className="m-0" onClick={handlerun}>
                                {run?
                                <i className="fa-regular fa-circle-pause play"></i>:
                                <i className="fa-regular fa-circle-play play"></i>
                                }
                            </h1>
                            <h1 className="m-0" onClick={handleReset}><i className="fa-regular fa-power-off ms-4 reset"></i></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}