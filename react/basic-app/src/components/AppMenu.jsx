import Menu from "./Menu.jsx";
import MenuList from "./MenuList.jsx";

export default function AppMenu() {
    const nameList = [
        { "name": "Home", "href": "#home", "bg": "blue", "color": "white"},
        { "name": "About", "href": "#about", "bg": "blue" },
        { "name": "Skills", "href": "#skills", "bg": "blue" },
        { "name": "My work", "href": "#mywork", "bg": "blue" },
        { "name": "Testimonial", "href": "#testimonial", "bg": "blue" },
        { "name": "Contact", "href": "#contact", "bg": "blue" },
        { "name": "Support", "href": "#support", "bg": "blue" }
    ]; 

    return (
        <>
            <div> 
                <Menu name="Home" href="#home" bg="red" color="white" />
                <Menu name="About" href="#about" bg="red" />
                <Menu name="Skills" href="#skills" bg="red" />
                <Menu name="My work" href="#mywork" bg="red" />
                <Menu name="Testimonial" href="#testimonial" bg="red" />
                <Menu name="Contact" href="#contact" bg="red" />
                <Menu name="Suport" href="#support" bg="red" />
            </div>
            <div>
                <MenuList list={nameList} />
            </div>
        </>
    );
}