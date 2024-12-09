import "./css/AppAirbnb.css";
import AirbnbComponent from "./AirbnbComponent.jsx";
import { useEffect, useState } from "react";

export default function AppAirbnb() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("/data/airbnb.json")
            .then((result) => result.json())
            .then((jsonData) => setList(jsonData))
            .catch((error) => console.log(error));
    }, []);

    return (
        <ul>
            {list && list.map((item) => 
                <li>
                    <AirbnbComponent 
                        img={item.img}
                        area={item.area}
                        view={item.view}
                        date={item.date}
                        coment={item.coment}
                        charge={item.charge}
                        isGood={item.isGood}
                        color={item.color}
                    />
                </li>
            )}
        </ul>
    );
}