// JS-ASSIGNMENT CHAPTER 31-34

// CHAPTER :DATE METHODS

// Question 1
// Write a program that displays current date and time in your browser. 

//answer:
// let date = new Date()
// document.write(date)

//Question 2
// Write a program that alerts the current month in words. For example December.

//answer:
// let date = new Date();
// let month = date.getMonth();

// let MonthNames = ["January", "Febmliruary", "March", "April", "May", "June", "July", "August",
//           "September", "October", "November", "December"];
// document.write("Current Month: " + MonthNames[month])

//Question 3
// Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

//answer:
// let date = new Date()
// let day = date.getDay()

// let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// document.write("Today is: " + days[day])


//Question 4
// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

//answer:
// let date = new Date();
// let day = date.getDay();


// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// if (day == "saturday"|| day == "sunday") {
//     alert("It’s Fun day")
// }
// else {
//     alert("Go back to work")
// }

//Question 5
// Write a program that shows the message “First fifteen days of the month” if the date is 
// less than 16th of the month else shows “Last days of the month”. 

//answer:
// let date = new Date();
// let newDate = date.getDate()

// if (newDate < 16) {
//     document.write("First fifteen days of the month")
// }
// else {
//     document.write("Last days of the month")
// }

//Question 6
// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it 
// to a variable that hasn't been declared beforehand. Use any variable you like to represent 
// the Date object.

//answer:
// let date = new Date()
// let minutesSinceEpoch = Math.floor(Date.now() / 60000);

// document.write('Current Date :' + date + '<br>')
// document.write("Minutes since Jan. 1, 1970 :", minutesSinceEpoch);

//Question 7
// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 

// answer:
// let date = new Date()
// let hours = date.getHours()

// if(hours>12){
//     document.write("Its AM")
// }
// else{
//     document.write("Its PM")
// }

//Question 8
//  Write a program that creates a Date object for the last day of the last month of 2020 
//  and assigns it to variable named laterDate. 

// answer:
// let date = new Date()
// let laterDate =new Date("31 Dec 2020")

// document.write(laterDate)

//Question 9
// Create a date object of the starting date of this Ramadan and alert the number of days past since 
// 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 

// let RamadanStart = new Date("2 march 2025")
// let firstRamadan = new Date("18 june 2015")
// let timeDiff = (RamadanStart-firstRamadan)
// let daysPass = Math.floor(timeDiff / (10000 * 60 * 60 * 24))

// document.write("Number of days past since 1st Ramadan:" + daysPass)

//Question 10
// Write a program that displays in your browser the seconds that elapsed between the reference 
// date and the beginning of 2015.

// answer:
// let referenceDate = new Date("1 jan 1970")
// let passedDate = new Date("1 jan 2015")
// let timeDiff = passedDate - referenceDate
// let secElapse = Math.floor(timeDiff / 10000)

// document.write("Seconds that elapsed between reference date and the begining of 2015: " + secElapse)

//Question 11
// Create a Date object for the current date and time. Extract the hours, reset the date object an hour
//  ahead and finally display the date object in your browser. 

// answer:
// let Datetoday = new Date();
// let currentHours = Datetoday.getHours();
// document.write("current date: " + Datetoday + "<br>");
// Datetoday.setHours(currentHours - 1);
// document.write("Updated Date and Time (1 hour ago): " + Datetoday);

//Question 12
// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// answer:
// let Datetoday = new Date();
// let year = Datetoday.getFullYear();
// document.write("current date: " + Datetoday + "<br>");
// Datetoday.setFullYear(year - 100);
// alert("Updated Date and Time (1 year ago): " + Datetoday);

//Question 13
// Write a program to ask the user about his age. Calculate and show his birth year in your browser. 

//answer:
// let userAge = +prompt("Enter your age");
// let today = new Date()
// let fullYear = today.getFullYear()
// let birthYear = fullYear-userAge

// document.write("Your age is " + userAge + " your birth year is : " + birthYear)

//Question 14
// Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded 
// off to 2 decimal places. Display the following fields: a. Customer Name b.

//answer:
// let name = "Sahar Shahid"
// let currentDate = new Date()
// let MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
//     "October", "November", "December"];
// let currentMonth = MonthNames(currentDate.getMonth())
// let unitconsumed = 350;
// let chargesPerUnit = 20;
// let netAmount = unitconsumed * chargesPerUnit
// let latePaymentSurcharge = netAmount * 0.1;
// let grossAmount = netAmount + latePaymentSurcharge;
// netAmount = netAmount.toFixed(2);
// latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
// grossAmount = grossAmount.toFixed(2);

// document.write("<h2>K-Electric Bill</h2>");
// document.write("<p><b>Customer Name:</b> " + customerName + "</p>");
// document.write("<p><b>Current Month:</b> " + currentMonth + "</p>");
// document.write("<p><b>Units Consumed:</b> " + unitconsumed + "</p>");
// document.write("<p><b>Charges per Unit:</b> Rs. " + chargesPerUnit + "</p>");
// document.write("<p><b>Net Amount Payable (Before Due Date):</b> Rs. " + netAmount + "</p>");
// document.write("<p><b>Late Payment Surcharge:</b> Rs. " + latePaymentSurcharge + "</p>");
// document.write("<p><b>Gross Amount Payable (After Due Date):</b> Rs. " + grossAmount + "</p>");


