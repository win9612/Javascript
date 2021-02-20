//나이 계산
var calc = document.querySelector(".btn");
calc.onclick = function(){
    var year = prompt("태어난 년도를 입력하세요.");
    var age = 2021 - year + 1;
    document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "살 입니다.";
}

