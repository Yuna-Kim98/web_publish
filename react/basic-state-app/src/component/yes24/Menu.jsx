export default function Menu({name, href, bg, color, category, click}) {
    // 메뉴 클릭 이벤트
    const handleClickMenu = () => {
        click(category);
    }

    return (
        <a href={href} 
            style={{backgroundColor:bg, color:color}} 
            className="menu-item"
            onClick={handleClickMenu}
        >{name}</a>
    );
}