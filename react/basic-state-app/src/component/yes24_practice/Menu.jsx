export default function Menu({name, href, bg, color, category, click}) {
    const handleMenuChange = () => {
        click(category);
        console.log(`menu --> ${category}`);
    }
    
    return (
        <a href={href} style={{backgroundColor:bg, color:color}} className="menu-item" onClick={handleMenuChange}>{name}</a>
    );
}