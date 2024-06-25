import { useEffect } from "react"
import { TimerProps } from "./timerTypes"

const Timer = ({timer, reset}: TimerProps) => {
    useEffect(()=> {reset()}, [reset])
    const formatedTimer = {
        minutes: new Date(timer).getUTCMinutes(),
        seconds: new Date(timer).getUTCSeconds(),
    };
    return (
        <>
            <div>
            </div>
            <span>
                {formatedTimer.seconds < 10 ? `0${formatedTimer.seconds}`: formatedTimer.seconds}
            </span>
        </>
    )
}
export default Timer
//{*formatedTimer.minutes < 10 ? `0${formatedTimer.minutes}`: formatedTimer.minutes*/}