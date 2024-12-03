import Avatar from "./Avatar";

export default function AvatarList({list}) {
    return (
        <ul>
            { list.map((item) => <li><Avatar img={item.img} name={item.name} /></li>) }
        </ul>
    );
}