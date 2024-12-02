import Avatar from "./Avatar.jsx";

// props = {
//     avatar_list: [
//         { 'img': '/images/people1.webp', 'name': 'Smith', 'age': '20' },
//         { 'img': '/images/people2.webp', 'name': 'James', 'age': '30' },
//         { 'img': '/images/people3.webp', 'name': 'Kelly', 'age': '19' }
//     ]
// }

export default function AvatatList({avatar_list}) {
    return (
        <ul>
            {avatar_list.map((object) =>
                <li>
                    <Avatar img={object.img} name={object.name} age={object.age}/>
                </li>
            )}
        </ul>
    );
}