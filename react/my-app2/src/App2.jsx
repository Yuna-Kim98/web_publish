import './App2.css';
// import Avatar from './component/Avatar';
import AvatarList from './component/AvatarList';

export default function App2() {
    const list = [
        {'img': '/images/people1.webp', 'name': 'Smith', 'age': '20'},
        {'img': '/images/people2.webp', 'name': 'James', 'age': '30'},
        {'img': '/images/people3.webp', 'name': 'Kelly', 'age': '19'}
    ];

    return (
        <>
            <AvatarList avatar_list = {list} />
        </>
    );
}