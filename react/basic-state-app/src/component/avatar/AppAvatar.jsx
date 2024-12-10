import "./css/avatar.css";
import AvatarComponent from "./AvatarComponent.jsx";
import { useEffect, useState } from "react";

export default function AppAvatar() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("/data/avatar.json")
            .then((result) => result.json())
            .then((jsonData) => setList(jsonData))
            .catch((error) => console.log(error));
    }, []);

    return (
        <ul>
            {list && list.map((item) => 
                <li>
                    <AvatarComponent 
                        img={item.img}
                        alt={item.alt}
                        isNew={item.isNew}
                        name={item.name}
                    />
                </li>
            )}
        </ul>
    );
}