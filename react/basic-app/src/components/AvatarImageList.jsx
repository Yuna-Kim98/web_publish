import '../css/Avatar.css'
import AvatarImage from './AvatarImage.jsx';

export default function AvatarImageList({list}) {
    return (
        <ul className='img-list'>
            { list.map((item) => <li><AvatarImage img={item.img} /></li>) }
        </ul>
    );
}