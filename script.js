document.addEventListener('DOMContentLoaded', function () {
    const hourInput = document.getElementById('hourInput');
    const minuteInput = document.getElementById('minuteInput');
    const setAlarmBtn = document.getElementById('setAlarmBtn');
    let alarmInterval;
  
    setAlarmBtn.addEventListener('click', function () {
      const hours = parseInt(hourInput.value);
      const minutes = parseInt(minuteInput.value);
  
      if (isNaN(hours) || isNaN(minutes)) {
        alert('Please enter valid hour and minute values.');
        return;
      }
  
      const now = new Date();
      const alarmTime = new Date(now);
      alarmTime.setHours(hours, minutes, 0, 0);
  
      const timeDifference = alarmTime - now;
  
      if (timeDifference <= 0) {
        alert('Please choose a time in the future.');
        return;
      }
  
      clearInterval(alarmInterval);
  
      alarmInterval = setInterval(function () {
        const currentTime = new Date();
        const remainingTime = alarmTime - currentTime;
  
        if (remainingTime <= 0) {
          clearInterval(alarmInterval);
          triggerAlarm();
        }
      }, 1000);
  
      alert('Alarm set successfully!');
    });
  
    function triggerAlarm() {
      alert('ALARM! Wake up!');
    }
  });
  
