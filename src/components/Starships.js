import { useState, useEffect } from "react"
import "./starships.sass"

export default function Starships(_props) {

    const [starships, setStarships] = useState([])
    const getStarships = async () => {
        const response = await fetch("https://swapi.dev/api/starships/")
        const json = await response.json()
        setStarships(json.results)
    }

    useEffect(() => { getStarships() }, [])
    if (starships.length <= 0) {
        return <div>
            <h1>Have you checked the thermal cupllers?</h1>
        </div>
    }

    return (
        <div>
            <h1 className="title"> Star Wars</h1>

            <div className="ships-container">
                {starships.map((ship) => {
                    return (
                        <div key={ship.name}>
                            <div className="row">
                                <div className="col s12 m3">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                    <span className="card-title">{ship.name}</span>
                                    <p>Cost: {ship.cost_in_credits}</p>
                                    <p>Made By: {ship.manufacturer}</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                      </div>
                    )
                })}
            </div>
        </div>
    )
}