import '../css/Menu.css';
import Menu from "./Menu.jsx";

export default function MenuList({list}) {
    return (
        <ul className='menu-list'>
            {list.map((object) => <li><Menu name={object.name} href={object.href} /></li>)}
        </ul>
    );
}