// variable 변수
const playerName = "sy";
const playerPoints = 9999;

// array [] 대괄호 사용
const player1 = ["sy", 9999];

// object : {} 중괄호 사용
// object는 property라는 속성을 넣을 수 있음
// 설명이 필요할 때 사용
// const로 만든 함수가 player라는 object 타입이므로 안의 속성이 바뀌는 건 상관 없음
const player = {
    name: "sy",
    potins: 9999,
};
console.log(player);
console.log(player.name);

// function
// 코드를 캡슐화해서 실행을 여러 번 할 수 있게 해줌
// ~. 의 다음은 function 임
// ()가 함수를 실행하는 방법
function sayHello(NameOFRerson, age){
    console.log("Hello my name is");
    console.log(NameOFRerson);
    console.log("Hello my name is" + NameOFRerson + " and I'm " age);
}
console.log();
sayHello();
sayHello("sy");
sayHello("nico", 10);

// NaN : not a number (숫자가 아님)
