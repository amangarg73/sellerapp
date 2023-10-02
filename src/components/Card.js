export default function Card({Cars}){
    console.log(Cars)
    return (
        <div className="Card-Container">
            {Cars.map(Car=>(
                <div className="Card">
                <img src={Car.image}></img>
                <div className="Card-info">
                    <h3>{Car.title}</h3>
                    <p>{Car.start_production?Car.start_production:2000}</p>
                </div>
                <div className="Card-Details">
    
                </div>
                <div className= "Card-Price">
                    <p>{Car.class}</p>
                    <i></i>
                    <button>Rent Now</button>
                </div>
                </div>
            ))}
        </div>
    )
}