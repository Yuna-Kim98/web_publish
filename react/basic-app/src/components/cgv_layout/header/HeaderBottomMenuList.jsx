import { useEffect, useState } from 'react';
import HeaderBottomMenu from './HeaderBottomMenu.jsx'
import { fetchJSON } from '../js/commons.js';

export default function HeaderBottomMenuList() {
    const [names, setNames] = useState([]);
    
    useEffect(() => {
        fetchJSON("/data/cgv_header.json")
            .then((result) => setNames(result.bottomNameList))
            .catch((error) => console.log(error));
            // 외부에서 fetch()를 실행하기 때문에 굳이 catch()를 사용하지 않아도 됨

        // fetch("/data/cgv_header.json")
        //     .then((data) => data.json())
        //     .then((jsonData) => setNames(jsonData.bottomNameList))
        //     .catch((error) => console.log(error));
    }, []);

    return (
        <ul>
            {names && names.map((item) =>
                <li>
                    <HeaderBottomMenu name={item.name} />
                </li>
            )}
        </ul>
    );
}