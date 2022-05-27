import { useState } from "react"
import "./Clock.css";
import Watch from "./Watch"
import Task from "./Task";

interface Props {
    pomodoroTime : number,
    setPomodoroTime : React.Dispatch<React.SetStateAction<number>>, 
    shortBreakTime : number, 
    setShortBreakTime : React.Dispatch<React.SetStateAction<number>>, 
    longBreakTime : number, 
    setLongBreakTime : React.Dispatch<React.SetStateAction<number>>
}

const Clock = ({ pomodoroTime, setPomodoroTime, shortBreakTime, setShortBreakTime, longBreakTime, setLongBreakTime } : Props) => {
    const [ activeTimer, setActiveTimer ] = useState("pomodoro");
    const [ remainingTime, setRemainingTime ] = useState(pomodoroTime * 60)
    const [ intervalId, setIntervalId ] = useState(0)

    const handlePomodoroClicked = (e : any) => {
        e.preventDefault()
        setActiveTimer("pomodoro");
        setRemainingTime(pomodoroTime * 60)
        clearInterval(intervalId)
    }

    const handleShortClicked = (e: any) => {
        e.preventDefault()
        setActiveTimer("short");
        setRemainingTime(shortBreakTime * 60)
        clearInterval(intervalId)
    }

    const handleLongClicked = (e: any) => {
        e.preventDefault()
        setActiveTimer("long");
        setRemainingTime(longBreakTime * 60)
        clearInterval(intervalId)
    }

    const startTimer = (e : any) => {
        e.preventDefault()
        clearInterval(intervalId)
        let newIntervalId = window.setInterval(() => {
            if (remainingTime > 0){
                setRemainingTime(remainingTime => remainingTime - 1)
            }
        }, 1000)
        setIntervalId(newIntervalId)
    }

    return (
        <div>
            <div className="d-flex flex-column border mb-4">
                <div className="ms-auto me-auto mt-4">
                    <button onClick={ handlePomodoroClicked } className="btn-primary">Pomodoro</button>
                    <button onClick={ handleShortClicked } className="btn-primary">Short Break</button>
                    <button onClick={ handleLongClicked } className="btn-primary">Long Break</button>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        {
                            <Watch remainingTime={ remainingTime } />
                        }
                    </div>
                </div>
                <button className="btn-primary start-btn ms-auto me-auto mb-4" onClick={ startTimer }>Start</button>
            </div>
            <Task activeTimer={ activeTimer }/>
        </div>
    )
}

export default Clock;