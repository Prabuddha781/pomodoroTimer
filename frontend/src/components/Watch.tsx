import "./Watch.css"

interface Props{
    remainingTime: number
}

const Watch = ({ remainingTime }: Props) => {
    const convertTime = (remainingTime: number) : string => {
        console.log(remainingTime)
        let minutes = (Math.floor(remainingTime / 60)).toString();
        let seconds = (remainingTime % 60).toString();
        if ((minutes.length) === 1){
            minutes = '0' + minutes
        }
        if ((seconds.length) === 1){
            seconds = '0' + seconds
        }
        return minutes + ':' + seconds
    }

    return (
        <div className="showTimeFont">{ convertTime(remainingTime) }</div>
    )
}

export default Watch;