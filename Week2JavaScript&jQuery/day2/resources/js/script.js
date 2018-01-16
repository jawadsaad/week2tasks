var event1 = document.getElementById('button1');
            
event1.addEventListener('click', main, false);

var event2 = document.getElementById('button2');
            
event2.addEventListener('click', anotherString, false);

var event3 = document.getElementById('button2');
            
event3.addEventListener('click', displayOriginalStr, false);

var event4 = document.getElementById('button3');
            
event4.addEventListener('click', hideStrings, false);

var event5 = document.getElementById('button4');
            
event5.addEventListener('click', displayNums, false);

var event6 = document.getElementById('button5');
            
event6.addEventListener('click', hideNums, false);

var event7 = document.getElementById('button6');
            
event7.addEventListener('click', displayNums2, false);

var event8 = document.getElementById('button7');
            
event8.addEventListener('click', hideNums2, false);

var event9 = document.getElementById('button8');
            
event9.addEventListener('click', displayNums3, false);

var event10 = document.getElementById('button9');
            
event10.addEventListener('click', hideNums3, false);

var event11 = document.getElementById('button10');
            
event11.addEventListener('click', displayNums4, false);

var event12 = document.getElementById('button11');
            
event12.addEventListener('click', hideNums4, false);

var event13 = document.getElementById('button12');
            
event13.addEventListener('click', displayDayTime, false);

var event14 = document.getElementById('button13');
            
event14.addEventListener('click', hideDayTime, false);        

//summing

function main() {
    var sum = summit(parseInt(input1.value), parseInt(input2.value), parseInt(input3.value));
    display(sum);
}

function summit(x, y, z) {
    total = x + y + z;
    return total;
}

function display(sum) {
    document.getElementById('result').innerHTML = sum;
}

//local vs global variables.

var str = "This is a string with name <strong>str</strong>. This is the original string.";

document.getElementById('variable1').innerHTML = str;

function anotherString() {
    var str = "This is another string with name <strong>str</strong>. This string is within a function.";
    document.getElementById('variable2').innerHTML = str;
}

function displayOriginalStr() {
    document.getElementById('variable3').innerHTML = str;
}

function hideStrings() {
    document.getElementById('variable2').innerHTML = '';
    document.getElementById('variable3').innerHTML = '';
}

//for loops and printing numbers
/*
function displayNums() {
    var arr = [];
    for (var i = 1; i < 51; i++) {
        arr[i-1] = i;
        document.getElementById('numbers').innerHTML = arr;
    }
    
}*/

/*function displayNums() {
    for (var i = 1; i < 51; i++) {
        var nums = document.getElementById('numbers');
        var newEl = document.createElement('p');
        var newText = document.createTextNode(i);
        
        newEl.appendChild(newText);
        nums.appendChild(newEl);
    }
}*/

function displayNums() {
    var count = '';
    for (var i = 1; i < 51; i++) {
        if (i < 50) {
            count += i + ", ";
        } else {
            count += i;
        }
    }
    document.getElementById('numbers').innerHTML = count;
}


function hideNums() {
    document.getElementById('numbers').innerHTML = '';
}

//while loops and printing numbers

function displayNums2() {
    var count = 1;
    var nums = '';
    while (count < 11) {
        if (count < 10) {
            nums += count + ", ";
            
        } else {
            nums += count;
        }
        count++;
    }
    document.getElementById('numbers2').innerHTML = nums;
}

function hideNums2() {
    document.getElementById('numbers2').innerHTML = '';
}

//do-while loops and printing numbers

function displayNums3() {
    var count = 1;
    var nums = '';
    
    do {
        if (count < 10) {
            nums += count + ", ";
        } else {
            nums += count;
        }
        count++;
    } while (count < 11)
        
    document.getElementById('numbers3').innerHTML = nums;
}

function hideNums3() {
    document.getElementById('numbers3').innerHTML = '';
}

//nested loops and printing numbers

function displayNums4() {
    var count = '';
    for (var i = 1; i < 3; i++) {
        for (var j = 1; j < 11; j++) {
            if (j < 10) {
                count += j + ", ";
            } else {
                count += j + "<br />";
            }
        }
    }
    document.getElementById('numbers4').innerHTML = count;
}

function hideNums4() {
    document.getElementById('numbers4').innerHTML = '';
}

/*function displayNums4() {
    var count = '';
    for (var i = 1; i < 3; i++) {
       for (var j = 1; j < 11; j++) {
           if (i === 1) {
                count += j + ", ";
           } else {
               count += 10 - j + ", ";
           }
       }
    }
    document.getElementById('numbers4').innerHTML = count;
}*/

//switch statements

var dayOfTheWeek = new Date().getDay();
var hoursOfTheDay = new Date().getHours();
var minsOfTheDay = new Date().getMinutes();
var secsOfTheDay = new Date().getSeconds();

var ddt = hoursOfTheDay + ":" + minsOfTheDay + ":" + secsOfTheDay;
var day = '';

//document.getElementById('day').innerHTML = ddt;

switch (dayOfTheWeek) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case  3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

function displayDayTime() {
    document.getElementById('day').innerHTML = day + ", " + ddt;
}

function hideDayTime() {
    document.getElementById('day').innerHTML = '';
}