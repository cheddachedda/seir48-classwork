$(document).ready(function () {
  const fetchInfo = function () {
    $.getJSON('/api/info').done(function (info) {
      console.log(info);

      $('#brother').text(info.brother);
      $('#time').text(info.time);
      $('#uptime').text(info.uptime);
      $('#calls').text(info.calls);
      $('#bushfires').text(info.bushfires);
    });
  };

  setInterval(fetchInfo, 3000);
});
