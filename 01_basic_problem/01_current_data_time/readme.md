# Challenge : Display Current day and time .

This repository contains a JavaScript function to display the current day and time in a specific format. You can pass a `Date` object to this function, or it will use the current date and time by default.

## Instructions

Write a JavaScript program to display the `current day and time` 

## Sample Output

```plaintext
Today is : Tuesday.
Current time is : 10 PM : 30 : 38
```
### Function Definition

```
function displayDayAndTime(date = new Date()) {
  // Array of weekday names
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Get the current day
  const day = days[date.getDay()];

  // Get the current hours, minutes, and seconds
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Determine AM or PM suffix
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format the minutes and seconds to always have two digits
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  // Create the output strings
  const dayString = `Today is : ${day}.`;
  const timeString = `Current time is : ${hours} ${ampm} : ${formattedMinutes} : ${formattedSeconds}`;

  // Display the output
  console.log(dayString);
  console.log(timeString);
}
```
## Example Usage

Using Current Date and Time

```
displayDayAndTime();
```
Using a Specific Date and Time

```
const specificDate = new Date('June 21, 2024 15:30:45');
displayDayAndTime(specificDate);
```


