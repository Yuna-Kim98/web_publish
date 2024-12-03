import '../css/Button.css'

export default function Button({name, type}) {
    return (
        <button type={type}>{name}</button>
    );
}