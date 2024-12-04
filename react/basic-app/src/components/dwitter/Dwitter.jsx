// import './Dwitter.css';
// 부모 쪽에서만 css를 호출하면 상속되어 사용할 수 있음

export default function Dwitter(props) {
    return (
        <div className="dwitter" key={props.id}>
            <div className="dwitter-image">
                <img src={props.img} alt="image" />
            </div>
            <div className="title">
                <span>{props.name}</span>
                <span>{props.id}</span>
                <span>{props.date}</span>
            </div>
            <div className="content">{props.content}</div>
        </div>
    );
}