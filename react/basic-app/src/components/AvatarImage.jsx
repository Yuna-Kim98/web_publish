import '../css/Avatar.css';

// props = {img: "/images/people1.webp"}
// props.img

export default function AvatarImage({img}) { // 구조분해할당
    return (
        <img src={img} className="avatar-img"></img>
    );
}