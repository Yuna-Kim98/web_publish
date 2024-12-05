import './BoxOffice.css';
import { useEffect, useState } from "react";
import BoxOffice from './BoxOffice.jsx';

export default function AppBoxOffice() {
    const [dailyBoxOffice, SetDailyBoxOffice] = useState([]);
    // const [kmdbList, SetKmdbList] = useState([]);
    // console.log(dailyBoxOffice[].movieNm);
    
    
    useEffect(() => {
        const key = `a8b332937ccc33a57fd849262c540ef6`;
        const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20241203`;
        
        fetch(url)
            .then((data) => data.json())
            .then((daily) => SetDailyBoxOffice(daily.boxOfficeResult.dailyBoxOfficeList))
            .catch((error) => console.log(error));
    }, []);

    // useEffect(() => {
    //     const serviceKey = `EGHVI615PSB5K5YGV5JY`;
    //     const title = dailyBoxOffice.map((boxOffice) => boxOffice.movieNm);
    //     // console.log(title);
    //     let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    //     url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    //     url += `&title=${title}&ServiceKey=${serviceKey}`;

    //     fetch(url)
    //         .then((item) => item.json())
    //         .then((kmdb) => {
    //             // SetKmdbList(kmdb.Data[0].Result[0].posters.split('|')[0])
    //             // console.log(kmdbList);
    //             console.log(kmdb);
                
    //         })
    //         .catch((error) => console.log(error));

    // }, []);

    return (
        <>
            <h1>KOBIS 박스오피스</h1>
            <div className='content-wrap'>    
                <div className="title">
                    <BoxOffice 
                        rank = '순위'
                        title = '제목'
                        openDt = '개봉일'
                        audiCnt = '일별 관객수'
                        audiTotal = '누적 관객수'
                        salesAcc = '누적 매출액'
                        type = 'title'
                    />
                </div>
                <div className='content'>
                    { dailyBoxOffice.map((boxOffice) => 
                        <BoxOffice className='content-detail'
                            rank = {boxOffice.rank}
                            title = {boxOffice.movieNm}
                            openDt = {boxOffice.openDt}
                            audiCnt = {boxOffice.audiCnt}
                            audiTotal = {boxOffice.audiAcc}
                            salesAcc = {boxOffice.salesAcc}
                            type = 'content' />
                    ) }
                </div>
            </div>
        </>
    );
}