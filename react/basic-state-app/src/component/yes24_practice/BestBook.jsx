import React from 'react';
import BookCover from './BookCover.jsx';
import BookDetail from './BookDetail.jsx';
import Button from './Button.jsx';

export default function BestBook({bookList}) {
    return (
        <div>
            <ul className="rank">
                {bookList.map((item, i) => 
                    <li className="rankList">
                        <div className='book'>
                            <BookCover rank={i + 1} img={item.img} alt={item.alt} />
                            <BookDetail
                                recom={item.recom}
                                today={item.today}
                                des={item.des}
                                coment={item.coment}
                                type={item.type}
                                title={item.title}
                                writer={item.writer}
                                company={item.company}
                                date={item.date}
                                event={item.event}
                                charge={item.charge}
                            />
                        </div>
                        <div className='button'>
                            <Button />
                        </div>    
                    </li>
                )}
            </ul>
        </div>
    );
}

