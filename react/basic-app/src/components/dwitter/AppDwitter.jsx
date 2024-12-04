import './Dwitter.css';
import Dwitter from './Dwitter.jsx';
import { useEffect, useState } from 'react';

export default function AppDwitter() {
    const [dwitters, setDwitters]  = useState([]); // react에서 관리
    // useStatus : 데이터 관리
    // 리액트는 새로고침을 하지 않고 필요한 부분만 업데이트하기 때문에 상태관리를 위해 react hooks이 필요
    
    // react network 접속 진행 시 ==> useEffect() Reack Hooks 사용!
    // react hooks -- useEffect();
    // useEffect(callback함수, dependencies) : 맨 처음에 실행되는 함수, 비동기식 처리를 담당
    // 사용하지 않을 경우 무한루프에 빠짐. 맨 처음 한 번만 호출하도록 상태 관리
    useEffect(() => {
        fetch('data/dwitters.json') // network을 통해 접속
        .then((result) => result.json())
        .then((jsonData) => setDwitters(jsonData))
        .catch((error) => console.log(error));
    }, []);
    
    return (
        <div className='dwitter-container'>
            <h1>Dwitter</h1>
            <ul className='dwitter-menu'>
                <li>All Dwitter</li>
                <li>My Dwitter</li>
                <li>Login / Sign-up</li>
            </ul>
            {dwitters.map((dwitter) => 
                <Dwitter
                    img={dwitter.img}
                    name={dwitter.name}
                    id={dwitter.id}
                    date={dwitter.date}
                    content={dwitter.content} />
            )}
        </div>
    );
}