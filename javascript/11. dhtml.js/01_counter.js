// counter 증가
function increment() {
    // alert('증가');
    let number = document.querySelector('#number').textContent;
    // let number2 = document.querySelector('#number2').value
    // input타입의 데이터를 넘겨 받을 때는 .value, 다른 타입 데이터를 넘겨 받을 때는 .textContent를 사용
    if(number < 10)
        document.querySelector('#number').textContent = ++number;
}

// counter 감소
function decrement() {
    // alert('감소');
    let number = document.querySelector('#number').textContent;
    if (number > 0)
        document.querySelector('#number').textContent = --number;
}

// counter 증감
function counter(flag) {
    let number = document.querySelector('#number').textContent;
    if (flag === 'increment') {
        document.querySelector('#number').textContent = ++number;
    } else {
        if (number > 0)
            document.querySelector('#number').textContent = --number;
    }
}