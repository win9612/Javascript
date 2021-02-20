// 카카오 api 사용 예시 (책 검색 api)

// 요청 api
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "유령의 시간" },
    headers: {Authorization: "KakaoAK b73675efc6eeeef9e22a4d93c0239082"}
  })
  
  // 응답 api 사용 (msg)
  // msg에 어떤 객체 내용이 있는지는 console.log(msg)로 확인 해보면 좋음
    .done(function( msg ) {
      var t1 = document.getElementById("ti");
      var t2 = document.getElementById("at");
      var title = msg.documents[0].title;
      var authors = msg.documents[0].authors;
      t1.innerText = title;
      t2.innerText = authors;
    });