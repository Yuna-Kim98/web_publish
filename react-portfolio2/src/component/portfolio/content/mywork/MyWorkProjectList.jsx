import MyWorkProject from './MyWorkProject.jsx';

export default function MyWorkProjectList({projectList}) {
    return (
        <ul className="projects">
            { projectList && projectList.map((item) =>
                <li>
                    <MyWorkProject img={item.img} title={item.title} des={item.des} />
                </li>
            )}
        </ul>    
    );
}