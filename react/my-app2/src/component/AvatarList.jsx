import Avatar from "./Avatar";
import './AvatarList.css'

export default function AvatarList({avatar_list}) {
    return (
        <ul className="list">
            {avatar_list.map((object) => 
                <li>
                    <Avatar img={object.img} name={object.name} age={object.age} />
                </li>
            )}
        </ul>
    );
}