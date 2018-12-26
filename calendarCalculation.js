
var day, month, year;
var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// function buttonsControl() {
//     if (document.getElementById(""));
// }

function isValidDate() {
    var dateString = document.getElementById("enterDate").value;
    // First check for the pattern
    try {
        var date_format = /^\d{1,2}\/\d{1,2}\/\d{4}$/; //mm/dd/yyyy

        if (!date_format.test(dateString))
            //return false; 
            throw "Invalid date format";

        // Parse the date parts to integers
        var parts = dateString.split("/");
        day = parseInt(parts[1], 10);
        month = parseInt(parts[0], 10);
        year = parseInt(parts[2], 10);

        // Check the ranges of month and year
        if (year < 1000 || year > 3000 || month == 0 || month > 12)
            throw "Invalid year/month entry";

        // Adjust monthLength for leap years
        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
            monthLength[1] = 29;

        if (day < 1 || day > monthLength[month - 1])
            throw "Invalid day";
    }

    catch (err) {
        window.alert(err + ", please re-enter date");
        // errorMessage.innerHTML = " ! " + err + " , please re-enter date";
    }
}

function tmrwDate() {
    try {
        isValidDate();
        //check day
        var next_date = getTmrwDate(month, day, year)

        document.getElementById("Tomorrow").value = next_date;
    }
    catch (err) {
        document.getElementById("Tomorrow").value = "";
    }
}

//return tmrw date function for Unit Testing
function getTmrwDate(month, day, year) {
    var next_day, next_month, next_year;
    if (day == monthLength[month - 1]) { //array index of monthLength starts from 0 to 11, not 1 to 12
        next_day = 1;
    }
    else {
        next_day = day + 1;
    }

    //check month
    if (next_day < day) {//when tomorrow day < today day
        if (month == 12) {
            next_month = 1;
        }
        else {
            next_month = month + 1;
        }
    }
    else { //when today day < tomorrow day
        next_month = month;
    }

    //check year
    if (next_month < month) {
        next_year = year + 1;
    }
    else {
        next_year = year;
    }

    return next_month + "/" + next_day + "/" + next_year;
}

function YesterdayDate() {
    try {
        isValidDate();
        var previous_date = getYesterdayDate(month, day, year)
        document.getElementById("Yesterday").value = previous_date;

    }
    catch (err) {
        document.getElementById("Yesterday").value = "";
    }
}

//return function for unit testing
function getYesterdayDate(month, day, year) {
    var previous_day, previous_month, previous_year;
    //check day
    if (day == 1 && month == 1) {
        previous_day = monthLength[11];
    }
    else if (day == 1) {
        previous_day = monthLength[month - 2];
    }
    else {
        previous_day = day - 1;
    }

    //check month
    if (previous_day > day) {
        if (month == 1) {
            previous_month = 12
        }
        else {
            previous_month = month - 1;
        }
    }
    else {
        previous_month = month;
    }

    //check year
    if (previous_month > month) {
        previous_year = year - 1;
    }
    else {
        previous_year = year;
    }

    return previous_month + "/" + previous_day + "/" + previous_year;
}


function getZodiac(month, day, year) {
    var z;
    //Aries 21 March – 20 April
    if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        z = "Aries";
    }

    //Taurus 21 April – 21 May
    else if ((month == 4 && day >= 21) || (month == 5 && day <= 21)) {
        z = "Taurus";
    }

    //Gemini 22 May – 21 June
    else if ((month == 5 && day >= 22) || (month == 6 && day <= 21)) {
        z = "Gemini";
    }

    //Cancer 22 June – 22 July
    else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        z = "Cancer";
    }

    //Leo 23 July – 22 August
    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        z = "Leo";
    }

    //Virgo 23 Aug - 23 Sep
    else if ((month == 8 && day >= 23) || (month == 9 && day <= 23)) {
        z = "Virgo";
    }

    //Libra 24 Sep - 23 Oct
    else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        z = "Virgo";
    }

    //Scorpio Oct 24 - Nov 22
    else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        z = "Scorpio";
    }

    //Sagittarius 23 Nov - 21 Dec
    else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        z = "Sagittarius";
    }

    //Capricorn Dec 22 - Jan 20
    else if ((month == 12 && day >= 22) || (month == 1 && day <= 20)) {
        z = "Capricorn";
    }

    // Aquarius Jan 21 - Feb 19
    else if ((month == 1 && day >= 21) || (month == 2 && day <= 19)) {
        z = "Aquarius";

    }
    //Pisces Feb 20 - Mar 20
    else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
        z = "Pisces";
    }
    return z;
}

function Zodiac() {
    isValidDate();
    var zodiac = getZodiac(month, day, year);
    document.getElementById("Zodiac").value = zodiac;

    var x = document.createElement("IMG");
    x.setAttribute("src", zodiac + ".JPG")
    document.body.appendChild(x);
}


function dayOfWeek() {
    isValidDate();
    var dayOfWeek = getDayOfWeek(month, day, year)
    document.getElementById("DayOfWeek").value = dayOfWeek;
}

function getDayOfWeek(month, day, year) {
    var d = new Date(year, month - 1, day);
    var n = d.getDay();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days[n]; //return string of day of the week
}

function getThanksgivingDate(year) {
    //var d = new Date(year, month - 1, day);
    //var y = d.getFullYear;
    var first = new Date(year, 10, 1);
    var day_of_week = first.getDay();
    var thanksgivingDay = 22 + (11 - day_of_week) % 7;
    return thanksgivingDay;
}

function thanksDay() {
    isValidDate();
    var thanksGDay = getThanksgivingDate(year);
    document.getElementById("thanksDay").value = thanksGDay;
}

function countSundays(year, month, day) {
    //var day = 1;
    var numOfSundays = 0;
    var date = new Date(year, month - 1, day);
    var christmasDate = new Date(year, '11', '25');
    if (christmasDate <= date) {
        christmasDate = new Date(christmasDate.getFullYear() + 1, '11', '25');
    }
    while (date.getMonth() <= christmasDate.getMonth()) {
        if (date.getDate() == christmasDate.getDate() && (date.getMonth() == christmasDate.getMonth())) {
            break; //break out of the while loop after checked the date
        }
        if (date.getDay() == 0) { // Sun=0, Mon=1, Tue=2, etc.
            numOfSundays += 1;
        }
        day += 1;
        date = new Date(year, month - 1, day);
    }
    return numOfSundays;
}

function getNoOfDaysToChristmas(year, month, day) {
    var date = new Date(year, month - 1, day);
    var christmasDate = new Date(year, '11', '25');
    if (christmasDate <= date) {
        christmasDate = new Date(christmasDate.getFullYear() + 1, '11', '25');
    }
    return Math.round((christmasDate - date) / (1000 * 60 * 60 * 24));
}

function getShoppingDays(year, month, day) {
    var dateEntered = new Date(year, month - 1, day);
    var christmasDate = new Date(year, '11', '25');
    if (christmasDate <= dateEntered) {
        christmasDate = new Date(christmasDate.getFullYear() + 1, '11', '25');
    }
    var numSun = countSundays(year, month, day);
    var totalNumOfDays = getNoOfDaysToChristmas(year, month, day);
    var thanksgivingDay = getThanksgivingDate(year);
    var thanksGivingDate = new Date(year, '10', thanksgivingDay);
    if (thanksGivingDate >= dateEntered && thanksGivingDate <= christmasDate) {
        return totalNumOfDays - numSun - 2;
    } else {
        return totalNumOfDays - numSun - 1;
    }

}

function shoppingDays() {
    isValidDate();
    var shoppingDays = getShoppingDays(year, month, day);
    document.getElementById("shoppingDays").value = shoppingDays;
}

