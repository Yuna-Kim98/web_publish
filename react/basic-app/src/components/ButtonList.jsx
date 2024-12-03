import Button from "./Button.jsx";

export default function ButtonList({list}) {
    return (
        <div className='app-button'>
            {list.map((object) => <Button type={object.type} name={object.name}/>)}
        </div>
    );
}