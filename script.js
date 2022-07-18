var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturdaay"];
var dateS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
var monthNames = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var Hour = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
var Minutes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60'];
var Seconds = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60'];
var now = new Date();
var date =  new Date();
var month = new Date();
var hour = new Date();
var minutes = new Date();
var seconds = new Date();
var theDay = now.getDay();
var theDate = date.getDate();
var theMonth = month.getMonth();
var theHour = hour.getHours();
var theMinutes = minutes.getMinutes();
var theSeconds = seconds.getSeconds();
var dayOfToday = dayNames[theDay];
var todaysDate = dateS[theDate];
var Month = monthNames[theMonth];
var HourS = Hour[theHour];
var MinuteS = Minutes[theMinutes];
var SecondS = Seconds[theSeconds]; 
var finalEverything = dayOfToday + ' ' + todaysDate + "   " + Month + ' ' + theHour + ':' + theMinutes + ':' + theSeconds;
document.getElementById('LHeader').innerHTML= (finalEverything);


