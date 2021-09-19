import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../context'

const Timer = () => {

    const [minutes, setMinutes] = useState(20);
    const [seconds, setSeconds] = useState(0);
    const {isActive} = useGlobalContext();

    // adds a zero when number is a single digit
    function addZero(x) {
        if (x < 10) {
            return (x = "0" + x);
        } else {
            return x;
        }
    }

    useEffect(() => {
        let interval = null;

        // if timer is active
        if(isActive) {
            interval = setInterval(() => {

                if(seconds === 0) {
                    setSeconds(59);
                    setMinutes(minutes => minutes - 1);
                } else {
                    setSeconds(seconds => seconds - 1);
                }

            }, 1000);
        } else if(!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds])    

    return (
        <div className="timer">
            {addZero(minutes) + ":" + addZero(seconds)}
        </div>
    )
}

export default Timer
