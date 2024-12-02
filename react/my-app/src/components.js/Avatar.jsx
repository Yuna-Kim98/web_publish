import './Avatar.css';

// props로 넘어오는 데이터들은 모두 오브젝트 리터럴 타입
// test =  {
//     'img': '/images/people1.webp',
//     'name': 'Smith'
// }

export default function Avatar({img, name, age}) {
    return (
        <div className='avatar-container'>
            <img src={img} className="avatar" /> 
            <div>{name}, {age}</div>
        </div>
    );
}