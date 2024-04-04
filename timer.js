// 中考倒计时

// 设置目标日期
var targetDate = new Date("2024-06-21T09:00:00");
// 正计时用这个
var endDate = new Date("2024-06-22T16:00:00");

function updateTimer() {
  // 获取当前时间
  var currentDate = new Date();
  // 计算时间差（毫秒）
  var timeDifference = targetDate - currentDate;

  // 判断时间差是正还是负
  var prefix;
  if (timeDifference <= 0) {
    timeDifference = currentDate - endDate;
    prefix = "中考结束已经 ";
  } else {
    prefix = "距离中考还有 ";
  }

  // 计算差值的天、小时、分钟和秒
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // 更新页面上的倒计时/正计时
  document.getElementById('timer').innerText = prefix + days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒";
}

updateTimer();
// 每秒更新一次倒计时/正计时
setInterval(updateTimer, 1000);
