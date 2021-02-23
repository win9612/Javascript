function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms))
  }
 

 function buttonEvent()
{
    createHTML("<br>html 파일 다운로드...");
    createMeter();
    sleep(1000);

    createHTML("javascript 파일 다운로드...");
    createMeter();
    sleep(1500);

    createHTML("*** 다운로드 완료 ***");

    var newbutton = document.createElement("button");
    newbutton.setAttribute("id", "bt");
    newbutton.setAttribute("type", "button");
    newbutton.setAttribute("value","click");
    newbutton.setAttribute("onclick", "meterUp()");
    newbutton.innerHTML = "클릭";
    document.body.appendChild(newbutton);
}

function createHTML(msg){
    var newDiv= document.createElement("div");
    newDiv.innerHTML = msg;
    newDiv.setAttribute("class", "txt");
    document.body.appendChild(newDiv);
}

function createMeter(){
    var x = document.createElement("progress");
    x.setAttribute("class", "mt");
    x.setAttribute("min", "0");
    x.setAttribute("max", "100");
    x.setAttribute("value", "1");
    document.body.appendChild(x);
}

function meterUp(){
    var a = document.getElementsByClassName("mt")[0];
    a.value += 2;
}

