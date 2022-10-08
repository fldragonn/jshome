var start = 0;
function click_btn() {
  const b = document.getElementById('btn');
  const r = document.getElementById('result');

  if(b.innerText == '시작') {
    start = new Date();
    b.style.backgroundColor = '#FF3333';
    b.innerText = '종료';
    r.innerText = '20초을 세고 종료 버튼을 누르세요.'
  } else {
    var end = new Date();
    var et = (end - start) / 1000;
    b.style.backgroundColor = '#123e77';
    r.innerText = '버튼 누른 시간은 ' + et + '초 입니다.'
    b.innerText = '시작';
  }
}