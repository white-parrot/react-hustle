import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";

const ResultModal = forwardRef(function ResultModal(
    {targetTime, remainingTime, onReset}, ref){

    const userLost = remainingTime <= 0;
    const x = (remainingTime / 1000).toFixed(2);
    const  dialog = useRef();
    const score = Math.round( (1 - (remainingTime / (targetTime*1000)))*100 )
    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            }
        }
    });

    return  createPortal(
        <dialog ref={dialog} className='result-modal' onClose={onReset}>
            <h2>You {userLost ? 'Lost' : 'Won'} !</h2>
            <p>{userLost ? '' : 'Your Score Is : ' + score }</p>
            <p>You target time was : <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>
            <p>You stopped the timer with <strong>{x} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
});

export default ResultModal;