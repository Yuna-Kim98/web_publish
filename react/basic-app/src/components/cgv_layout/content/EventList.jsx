import EventListContent from "./EventListContent";

export default function EventList() {
    const eventList = [
        {
            "src": "https://img.cgv.co.kr/WebApp/contents/eventV4/42386/17297657794310.jpg",
            "alt": "event1",
            "title": "[CGV] 10월 컬쳐위크" ,
            "detail": "2024.10.24~2024.10.31"
        },
        {
            "src": "https://img.cgv.co.kr/WebApp/contents/eventV4/42466/17301874318690.jpg",
            "alt": "event2",
            "title": "[베놈-라스트댄스] (앵콜) 씨네브리핑 시리즈 10분요약" ,
            "detail": "2024.09.25~2024.10.31"
        },
        {
            "src": "/images/event1.jpg",
            "alt": "event3",
            "title": "[콜렉터블 무비머니]Vol.1 맥스 달튼" ,
            "detail": "2024.09.25~2024.10.31"
        }
    ];

    return (
        <div className="event-list">
            <ul>
                {eventList.map((event) => 
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