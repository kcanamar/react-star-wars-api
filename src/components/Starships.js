import { useState, useEffect } from "react"
import "./starships.sass"

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
                <div className="links">
                    {(starships && !starships.previous) ? null : <p onClick={() => getStarships(starships.previous)}>Go Back</p>}
                    {(starships && !starships.next) ? null : <p onClick={() => getStarships(starships.next)}>Click HereFor More</p>}
                </div>
            <div className="ships-container">
                {starships && starships.results.map((ship) => {
                    return (
                        <div className="ship" key={ship.name}>
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