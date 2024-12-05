import EventTitle from "./EventTitle.jsx";
import SpecialItem from "./SpecialItem.jsx";

export default function Speicail() {
    const specialList = [
        { 'text': 'SUITE CINEMA', 'hashtag': '#호텔 컨셉의 프리미엄관' },
        { 'text': 'CINE & LIVINGROOM', 'hashtag': '#신개념 소셜 상영관' },
        { 'text': '4DX', 'hashtag': '#모션시트 #오감체험' },
        { 'text': 'CINE de CHEF', 'hashtag': '#쉐프가 있는 영화관' }
    ];

    return(
        <div className="main-content-specialhall">
            <EventTitle text1='특별관' text2='전체보기' />
            <div className="specialhall-list">
                <div>
                    <img src="https://img.cgv.co.kr//Front/Main/2021/1209/16390080561620.png" alt="specialHall1" />
                </div>
                <ul>
                    {specialList.map((list) =>
                        <li><SpecialItem text={list.text} hashtag={list.hashtag} /></li>
                    )}
                </ul>
            </div>
        </div>
    );
}