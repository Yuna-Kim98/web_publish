import { useState, useEffect } from 'react';
import PackageContent from './PackageContent.jsx';

export default function Package() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("/data/cgv_content.json")
            .then((data) => data.json())
            .then((jsonData) => setList(jsonData.packageList))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="main-content-giftcon">
            {list && list.map((object) => 
                <PackageContent title={object.title} list={object.list} />
            )}
        </div>
    );
}