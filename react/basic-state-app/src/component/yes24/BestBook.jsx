import BestBookAvatar from './BestBookAvatar.jsx';
import BestBookContent from './BestBookContent.jsx';
import BestBookButton from './BestBookButton.jsx';

export default function BestBook({bookList}) {
    return (
        <>
            { bookList && bookList.map((book, i) => 
                <div className="best-book-container">
                    <BestBookAvatar 
                        rank={i + 1} 
                        img={book.img} />
                    <BestBookContent
                        suggest={book.suggest}
                        today={book.today}
                        type={book.type}
                        title={book.title}
                        author={book.author}
                        company={book.company}
                        pubDate={book.pubDate}
                        price={book.price}
                        perSale={book.perSale}
                        point={book.point}
                    />
                    <BestBookButton className="button-container" />
                </div>
            )}
        </>
    );
}