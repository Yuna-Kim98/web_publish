import { useEffect, useState } from "react";
import EventListContent from "./EventListContent";

export default function EventList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("/data/cgv_content.json")
            .then((data) => data.json())
            .then((jsonData) => setList(jsonData.eventList))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="event-list">
            <ul>
                {list && list.map((event) => 
                    <li>
                        <EventListContent
                            src={event.src}
                            alt={event.alt}
                            title={event.title}
                            detail={event.detail}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
}