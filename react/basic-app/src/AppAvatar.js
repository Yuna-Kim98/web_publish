import { useEffect, useState } from 'react';
import './App.css';
import Avatar from './components/Avatar.jsx';
import AvatarImage from './components/AvatarImage.jsx';
import AvatarImageList from './components/AvatarImageList.jsx';
import AvatarList from './components/AvatarList.jsx';

export default function App() {
  const [imageList, setImgList] = useState([]); // 업데이트 되는 부분을 관리
  const [avatarList, setAvatarList] = useState([]);

  useEffect(() => {
    fetch('/data/avatar.json')
      .then((result) => result.json())
      .then((jsonData) => {
        setImgList(jsonData.imageList);
        setAvatarList(jsonData.avatarList);
      })
      .catch((error) => console.log(error));
  }, []); // 비어있는 []는 dependencies 자리

  console.log(`imgList => ${imageList}`);
  console.log(`avatarList => ${avatarList}`);

  // const imgList = [
  //   { "img": "/images/people1.webp" },
  //   { "img": "/images/people2.webp" },
  //   { "img": "/images/people3.webp" }
  // ];
  // const avatarList = [
  //   { "img": "/images/people1.webp", "name": "Smith" },
  //   { "img": "/images/people2.webp", "name": "James" },
  //   { "img": "/images/people3.webp", "name": "Kelly" }
  // ];

  return ( // return 키워드는 화면에 바로 출력하는 내용을 작성할 때 사용
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
        <AvatarImageList list={imageList} />
      </div>
      <div>
        <AvatarList list={avatarList} />
      </div>
    </div>
  );
}