import {forwardRef} from "react";

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref){
    let x=0;
    return (<dialog ref={ref} className='result-modal'>
        <h2>You {result} !</h2>
        <p>You target time was : <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>
        <p>You stopped the timer with <strong>{x} seconds left.</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>)
});

export default ResultModal;