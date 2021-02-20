// 날짜, 시간 표시하기
function showTime(){
    var today = new Date();
    var y = today.getFullYear();
    var mt = today.getMonth();
    var d = today.getDay();
    var h = today.getHours();
    var m = today.getMinutes();
    document.write(today + "<br>");
    document.write(mt + "월 " + d + "일 " + h + "시 " + m + "분<br><hr>");
}
showTime();