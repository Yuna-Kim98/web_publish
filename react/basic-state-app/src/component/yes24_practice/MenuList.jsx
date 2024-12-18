import Menu from "./Menu.jsx";

export default function MenuList({list, click}) {
    const handleMenuChangeReq = (category) => {
        click(category);
        console.log(`MenuList --> ${category}`);
    } 

    return (
        <ul className='menu-container'>
            { list.map((item) => 
            <li>
                <Menu 
                    name={item.name} 
                    href={item.href} 
                    bg={item.bg} 
                    color={item.color} 
                    category={item.category}
                    click={handleMenuChangeReq} />
            </li>) }
        </ul>
    );
}