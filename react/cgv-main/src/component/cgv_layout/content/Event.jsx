import EventTitle from './EventTitle.jsx';
import EventList from './EventList.jsx';

export default function Event() {
    return(
        <div className="main-content-event">
            <EventTitle 
                text1='EVENT'
                text2='전체보기'
            />
            <EventList />
        </div>
    );
}