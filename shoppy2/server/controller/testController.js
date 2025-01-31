/** /test 경로로 요청한 처리를 실행하는 함수 정의 **/
export const getTest = (req, res) => {
    res.send('<h1>Hello~ Test!!</h1>');
    res.end();
}

export const getTestProduct = (req, res) => {
    res.send('<h1>Hello~ Test Product!!</h1>');
    res.end();
}