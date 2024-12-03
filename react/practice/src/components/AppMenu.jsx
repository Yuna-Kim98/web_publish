import '../css/Menu.css';
import MenuList from './MenuList.jsx';

export default function AppMenu() {
    const menuList = [
        { 'name': 'Home', 'href': '#home' },
        { 'name': 'About', 'href': '#about' },
        { 'name': 'Skills', 'href': '#skills' },
        { 'name': 'My work', 'href': '#mywork' },
        { 'name': 'Testimonial', 'href': '#testimonial' },
        { 'name': 'Contact', 'href': '#contact' },
    ];

    return (
        <div className='app-menu'>
            <MenuList list={menuList} />
        </div>
    );
}