import HeaderTopMenu from './HeaderTopMenu.jsx';

export default function HeaderTopMenuList() {
    const list = [
        { 'href': '#', 'src': '/images/loginPassword.png', 'alt':'loginPassword', 'name': '로그인' },
        { 'href': '#', 'src': '/images/loginjoin.png', 'alt':'loginjoin', 'name': '회원가입' },
        { 'href': '#', 'src': '/images/loginMember.png', 'alt':'loginMember', 'name': 'MY CGV' },
        { 'href': '#', 'src': '/images/loginCustomer.png', 'alt':'loginCustomer', 'name': '고객센터' }
    ];

    return (
        <nav className='header-top-nav'>
            <ul>
                {list.map((menu) => (
                    <li>
                        <HeaderTopMenu 
                            href = {menu.href}
                            src = {menu.src}
                            alt = {menu.alt}
                            name = {menu.name}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}