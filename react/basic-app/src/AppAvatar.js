import './App.css';
import Avatar from './components/Avatar.jsx';
import AvatarImage from './components/AvatarImage.jsx';
import AvatarImageList from './components/AvatarImageList.jsx';
import AvatarList from './components/AvatarList.jsx';

export default function App() {
  const imgList = [
    { "img": "/images/people1.webp" },
    { "img": "/images/people2.webp" },
    { "img": "/images/people3.webp" }
  ];
  const avatarList = [
    { "img": "/images/people1.webp", "name": "Smith" },
    { "img": "/images/people2.webp", "name": "James" },
    { "img": "/images/people3.webp", "name": "Kelly" }
  ];

  return (
    <div className="App">
      <div className="App-container">
        {/* 카드 형태 출력 */}
        <Avatar img="/images/people1.webp" name="Smith" />
        <Avatar img="/images/people2.webp" name="James" />
        <Avatar img="/images/people3.webp" name="Kelly" />
      </div>
      <div className="App-container">
        {/* 이미지만 출력 */}
        <AvatarImage img="/images/people1.webp" />
        <AvatarImage img="/images/people2.webp" />
        <AvatarImage img="/images/people3.webp" />
      </div>
      <div classNamev='App-container'>
        <AvatarImageList list={imgList} />
      </div>
      <div>
        <AvatarList list={avatarList} />
      </div>
    </div>
  );
}