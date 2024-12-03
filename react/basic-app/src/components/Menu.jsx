import '../css/Menu.css';

export default function Menu({name, href, bg, color}) {
    return (
        <a href={href} style={{backgroundColor:bg, color:color}} className="menu-item">{name}</a>
    );
}