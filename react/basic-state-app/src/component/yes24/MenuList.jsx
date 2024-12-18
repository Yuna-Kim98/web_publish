import Menu from "./Menu.jsx";

export default function MenuList({list, click}) {
    // 메뉴 클릭 이벤트( MenuList <-- Menu )
    const handleMenuClickReq = (category) => {
        click(category);
    }

    return (
        <ul className='menu-container'>
            { list && list.map((item) => 
            <li>
                <Menu 
                    name={item.name} 
                    href={item.href} 
                    bg={item.bg} 
                    color={item.color} 
                    category={item.category}
                    click={handleMenuClickReq}
                    />
            </li>) }
        </ul>
    );
}