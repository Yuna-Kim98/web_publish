// 임의의 과일을 선택받아..
// 좋아하는 과일 : 사과, 오렌지, 레몬
// 이외 과일 선택시 '좋아하는 과일 없음' 출력
let fruit = "lemon";
let choice = undefined;
if(fruit === "apple") choice = "🍎"; //코드가 한 줄일 때만 이렇게 작성 가능
else if(fruit === "orange") choice = "🍊";
else if ( fruit === "lemon") choice = "🍋";
else choice = `${fruit} 없음`;

console.log(`결과 : ${choice}`);