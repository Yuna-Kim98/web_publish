import '../css/Avatar.css';
import AvatarImage from './AvatarImage.jsx';

export default function Avatar({img, name}) {
    return (
        // JSX 문법
        <div className="avatar-container">
            <AvatarImage img={img} />
            <p>{name}</p>
        </div>
    );
}