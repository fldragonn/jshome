const num = document.getElementById('num');
const result = document.getElementById('result');

var com = Math.floor(Math.random() * 100) + 1;
var cnt = 0;

function upanddown() {
  var n = parseInt(num.value);
  if(n > com) {
    msg = 'Down';
    cnt += 1;
  } else if (n < com) {
    msg = 'Up';
    cnt += 1;
  } else {
    msg = 'Correct';
    const btn = document.getElementById('btn');
    btn.disabled = 'disabled';
  };

  var msg_cnt = '시도횟수: ' + cnt + '회';
  result.innerText = msg + '\n' + msg_cnt;

};
