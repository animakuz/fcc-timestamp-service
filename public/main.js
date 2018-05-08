var dateTimeInput = document.getElementById('date-time-input');
var sendBtn = document.getElementById('send-btn');

dateTimeInput.onblur = function() {
  sendBtn.setAttribute('href', '/' + dateTimeInput.value);
};
