/* Write a JavaScript program to display the current day and time in the following format.
    Sample Output : Today is : Tuesday.
    Current time is : 10 PM : 30 : 38   
*/

var date = new Date();


var  today = date.getDay();
var  daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(`Today is : ${daylist[today]}`);


var Minutes = date.getMinutes();

var  seconds = date.getSeconds();

var  hours = date.getHours();

var prepand = (hours >= 12) ? "PM" : "AM";

if (hours==0 && prepand == "PM"){
    if(Minutes== 0 && seconds == 0 ){
        hours = 12;
        prepand="PM";
    }else{
        hours = 12;
        prepand= "PM";
    }
}

if (hours==0 && prepand == "AM"){
    if(Minutes== 0 && seconds == 0 ){
        hours = 12;
        prepand= "Mid-night";
    }else{
        hours = 12;
        prepand= "AM";
    }
}

console.log(`current time is : ${hours + prepand} : ${Minutes} : ${seconds}`);
