export default function Links({starships, getStarships}) {
    return (
        <div className="links">
                {(starships && !starships.previous) ? null : <p onClick={() => getStarships(starships.previous)}>Go Back</p>}
                {(starships && !starships.next) ? null : <p onClick={() => getStarships(starships.next)}>Click Here For More</p>}
            </div>
    )
}