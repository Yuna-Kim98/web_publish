// 전역에서 사용할 수 있도록 export 속성을 부여한 함수를 끌어와 쓰는 방법
import {singleGugudan, selectGugudan, gugudan, fruitTower} from './fmodule_arrow.js';

// 함수 출력 - 현재 자바스크립트에서는 함수 이름이 같으면 첫 번째 함수만 호출이 됨
singleGugudan(3); // 3단 출력
selectGugudan(7, 9); // 7 ~ 9단 출력
gugudan(); // 전체 (1 ~ 9) 출력

// 함수 출력
// console.clear();
fruitTower('🍋', 5);
fruitTower('🍏', 10);