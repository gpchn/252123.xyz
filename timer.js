// 中考倒计时

// 设置目标日期
var targetDate = new Date("2024-06-21 09:00:00");

function updateTimer() {
  # 获取时间
  var currentDate = new Date();
  var timeDifference = targetDate - currentDate;

  # 计算差值
  if (timeDifference <= 0) {
    timeDifference = currentDate - targetDate;
    var prefix = "中考结束已经 ";
  } else {
    var prefix = "距离中考还有 ";
  }

  // 将差值转换为天、小时、分钟和秒
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
