import '../css/Menu.css';

export default function Menu({name, href}) {
    return (
        <a href={href} className='menu'>{name}</a>
    );
}