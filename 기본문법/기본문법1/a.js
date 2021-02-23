// Javascipt 문법 저장소입니다. By Mingyu


// 해당 요소 위에 마우스 포인터를 올릴 때, 떠날 때 나타나는 이벤트
window.onload = function(){
    var target= document.getElementById("a1");
    target.addEventListener('mouseover', function(){
        target.style.color = "red";
    });
    target.addEventListener('mouseout', function(){
        target.style.color = "black";
    });
}

function buttonEvent(word){
    const resultElement = document.getElementById('result');
    let number = resultElement.innerText;
    if(word === "plus"){
        number = parseInt(number) + 1;
    }
    else{
        number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
}