// 일반 자바스크립트 함수로 생성
// function 컨드롤러함수명(req, res) {}
// arrow function 형식을 주로 사용함
export const getHello = (req, res) => {
    console.log('helloController!');
    res.send('server.js > helloRouter > helloController:getHello');
    res.end();
}

export const getHelloParam = (req, res) => {
    res.send(`서버로 요청된 파라미터 --> ${req.params.id}`);
    res.end();
}