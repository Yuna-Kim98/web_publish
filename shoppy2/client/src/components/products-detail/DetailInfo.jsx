import React from 'react';

export default function DetailInfo({className, infoList}) {
    return (
        <>
            { infoList && infoList.map((info) => 
                <div className={className}>
                    <p className={className.concat('-title')}>{info.title}</p>
                    { info.sub1 && <p>{info.sub1}</p> }
                    { info.sub2 && <p>{info.sub2}</p> }
                    { info.sub3 && <p>{info.sub3}</p> }
                    { info.sub4 && <p>{info.sub4}</p> }
                    { info.sub5 && <p>{info.sub5}</p> }
                    { info.sub6 && <p>{info.sub6}</p> }
                    { info.sub7 && <p>{info.sub7}</p> }
                </div>
            ) }
        </>
    );
}