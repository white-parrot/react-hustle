import {useRef, useState} from "react";

export default  function TimerChallenge({title, targetTime}){
    let timer = useRef();
    const [timeExpired, setTimeExpired] = useState();
    const [timerStarted, setTimerStarted] = useState(false);

    function handleStartTimer(){
        timer.current = setTimeout( () => {
            setTimeExpired(true);
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
            {timeExpired ? 'You Lost !' : ''}
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