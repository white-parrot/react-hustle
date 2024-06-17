import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default  function TimerChallenge({title, targetTime}){
    let timer = useRef();
    let dialogRef = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000;

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialogRef.current.open();
    }

    function handleReset(){
        setTimeRemaining(targetTime*1000);
    }

    function handleStartTimer(){
        timer.current = setInterval( () => {
            setTimeRemaining( prevRemainingTime => prevRemainingTime - 10);
        }, 10);
    }

    function handleStopTimer(){
        dialogRef.current.open();
        clearInterval(timer.current);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            <ResultModal ref={dialogRef} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
            <p className="challenge-time">{targetTime} Second{targetTime > 1 ? 's' : ''}</p>
            <p>
                <button onClick={timerIsActive ? handleStopTimer : handleStartTimer}>
                    {timerIsActive ? 'Stop Timer' : 'Start Timer'}
                </button>
            </p>
            <p>{timerIsActive ? 'Time is running...' : 'Time Inactive'}</p>
        </section>
    );
}