import { useState, useEffect } from "react"
import "./starships.sass"
import Links from "./Links"

export default function Starships(_props) {
    const apiUrl = "https://swapi.dev/api/starships/"
    const [starships, setStarships] = useState(null)
    const getStarships = async (url) => {
        const response = await fetch(url)
        const json = await response.json()
        setStarships(json)
    }

    useEffect(() => { getStarships(apiUrl) }, [])

    return (
        <div>
            <h1 className="title"> Star Wars</h1>
            {!starships ? null : <Links starships={starships} getStarships={getStarships} />}
            <div className="ships-container">
                {starships && starships.results.map((ship, index) => {
                    return (
                        <div className="ship" key={index}>
                            <h5>{ship.name}</h5>
                            <hr/>
                            <p>Made By: {ship.manufacturer}</p>
                            <p>Price: {ship.cost_in_credits}</p>
                      </div>
                    )
                })}
            </div>
            
        </div>
    )
}