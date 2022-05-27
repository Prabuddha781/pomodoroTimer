import classes from "./Home.module.css"
import NavBar from "../common/NavigationBar"
import { useState } from "react"
import Clock from "./Clock"

const Home = () => {
    const [showReport, setShowReport] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const [ pomodoroTime, setPomodoroTime ] = useState(25)
    const [ shortBreakTime, setShortBreakTime ] = useState(5)
    const [ longBreakTime, setLongBreakTime ] = useState(15)

    return (
        <main className={`${ classes.fullPage }`}>
            <section className={`${ classes.interiorContainer } ms-auto me-auto`}>
            < NavBar setShowReport={ setShowReport } setShowSettings={ setShowSettings }/>
            <Clock pomodoroTime={ pomodoroTime } setPomodoroTime={ setPomodoroTime } shortBreakTime={ shortBreakTime } setShortBreakTime={ setShortBreakTime } longBreakTime={ longBreakTime } setLongBreakTime={ setLongBreakTime }/>
            </section>
        </main>
    )
}

export default Home;