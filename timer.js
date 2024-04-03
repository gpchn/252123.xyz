// 设置目标日期
var targetDate = new Date('2024-06-21 09:00:00');

function updateTimer() {
  // 获取当前日期
  var currentDate = new Date();
  var timeDifference = targetDate - currentDate;

  // 检查是否已经到达目标日期
  var prefix = timeDifference <= 0 ? "中考结束已经 " : "距离中考还有 ";

  // 计算已过去或剩余的时间
  var time = Math.abs(timeDifference);

  // 将差值转换为天、小时、分钟和秒
  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);

  // 更新页面上的倒计时/正计时
  document.getElementById('timer').innerText = prefix + days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒";

  // 请求下一个动画帧
  requestAnimationFrame(updateTimer);
}

// 立即调用一次updateTimer来初始化计时器
requestAnimationFrame(updateTimer);
