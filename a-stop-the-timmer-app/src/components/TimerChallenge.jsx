import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default  function TimerChallenge({title, targetTime}){
    let timer = useRef();
    const [timeExpired, setTimeExpired] = useState();
    const [timerStarted, setTimerStarted] = useState(false);

    function handleStartTimer(){
        timer.current = setTimeout( () => {
            setTimeExpired(true);
            setTimerStarted(false);
        }, targetTime * 1000);
        setTimeExpired(false);
        setTimerStarted(true);
    }

    function handleStopTimer(){
        clearTimeout(timer.current);
        setTimerStarted(false);
        setTimeExpired(false);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timeExpired && <ResultModal result='Lost' targetTime={targetTime} />}
            <p className="challenge-time">{targetTime} Second{targetTime > 1 ? 's' : ''}</p>
            <p>
                <button onClick={timerStarted ? handleStopTimer : handleStartTimer}>
                    {timerStarted ? 'Stop Timer' : 'Start Timer'}
                </button>
            </p>
            <p>{timerStarted ? 'Time is running...' : 'Time Inactive'}</p>
        </section>
    );
}