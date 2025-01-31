import React from 'react';

export default function DetailInfo({className, infoList}) {
    return (
        <>
            { infoList && infoList.map((list) => 
                <div className={className}>
                    <p className={className.concat('-title')}>{list.infoTitle}</p>
                    { list.infoDetail && list.infoDetail.map((item) => (
                        <p>
                            {item.sub}
                        </p>
                    )) }
                </div>
            ) }
        </>
    );
}