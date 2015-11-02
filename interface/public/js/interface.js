// Function to control lamp
$(document).ready(function() {

  // Refresh sensor data
  refreshSensors();
  setInterval(refreshSensors, 5000);

});

function refreshSensors() {

  $.get('/sensor_module/temperature', function(json_data) {
    $("#temperature").text('Temperature: ' + json_data.temperature + ' C');

	$.get('/sensor_module/humidity', function(json_data) {
      $("#humidity").text('Humidity: ' + json_data.humidity + ' %');
    });
  });

}
