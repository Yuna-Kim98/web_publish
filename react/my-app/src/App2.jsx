import './App2.css';
import Avatar from './components.js/Avatar';
import AvatatList from './components.js/AvatarList';

export default function App2() {
    const list = [
        { 'img': '/images/people1.webp', 'name': 'Smith', 'age': '20' },
        { 'img': '/images/people2.webp', 'name': 'James', 'age': '30' },
        { 'img': '/images/people3.webp', 'name': 'Kelly', 'age': '19' }
    ];

    return (
        <>
            <div className='container'>
                <Avatar img="/images/people1.webp" name="Smith" age="20" />
                <Avatar img="/images/people2.webp" name="James" age="30" />
                <Avatar img="/images/people3.webp" name="Kelly" age="19" />
            </div>
            <AvatatList avatar_list = {list} />
        </>
    );
}