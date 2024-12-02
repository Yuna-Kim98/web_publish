import './Avatar.css'

export default function Avatar({img, name, age}) {
    return (
        <div className="wrap">
            <img src={img} />
            <p>{name}, {age}</p>
        </div>
    );
}