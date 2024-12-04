import './BoxOffice.css';

export default function BoxOffice({rank, title, openDt, audiCnt, audiTotal, salesAcc, type}) {
    if(type === 'content') {
        audiCnt = parseInt(audiCnt).toLocaleString().concat('명');
        audiTotal = parseInt(audiTotal).toLocaleString().concat('명');
        salesAcc = parseInt(salesAcc).toLocaleString().concat('원');
    }

    return(
        <div className='content-detail'>
            <p style={{width: 50}}>{rank}</p>
            <p style={{width: 220}}>{title}</p>
            <p style={{width: 100}}>{openDt}</p>
            <p style={{width: 100}}>{audiCnt}</p>
            <p style={{width: 100}}>{audiTotal}</p>
            <p style={{width: 150}}>{salesAcc}</p>
        </div>
    );
}