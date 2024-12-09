export default function AirbnbComponent(props) {
    return (
        <div className="container">
            <div className="img">
                <img className="img1" src={props.img} />
                {props.isGood && <span className="guest">게스트 선호</span>}
                <span className="like" style={{color: props.color}}>♥</span>
            </div>
            <div className="sub">
                <div className="sub-detail-1">
                    <p className="area">{props.area}</p>
                    <p className="view">{props.view}</p>
                    <p className="date">{props.date}</p>
                    <p className="coment">{props.coment}</p>
                </div>
                <div className="sub-detail-2">
                    <span className="charge">&#8361;{props.charge}</span><span> /박</span>
                </div>
            </div>
        </div>
    );
}