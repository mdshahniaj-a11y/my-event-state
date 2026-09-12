import { useState } from "react"

export default function Batter() {
    const [runs, setRuns] = useState(0);
    const hanaleAddOne = () => {
        setRuns(runs + 1);
    }
    const handleAddFour = () => {
        setRuns(runs + 4);
    }
    const handleAddSix = () => {
        setRuns(runs + 6);
    }
    return (
        <div>
            <p>-----------------------</p>
            <h2>Score: {runs}</h2>
            <button onClick={hanaleAddOne}>add 1</button>
            <button onClick={handleAddFour}>add 4</button>
            <button onClick={handleAddSix}>add 6</button>
        </div>
    )
}