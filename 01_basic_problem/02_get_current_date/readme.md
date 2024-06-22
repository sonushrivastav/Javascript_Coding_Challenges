# Get Current Date

This repository contains a simple JavaScript program that retrieves and displays the current date. The date is formatted as `YYYY-MM-DD` and can be displayed on a web page by clicking a button.

## Features
- Retrieves the current date using JavaScript.
- Formats the date as `YYYY-MM-DD`.

## Sample Output

```plaintext
Current Date is : 2024-06-22
```

## Function definitions

```
function getCurrentDate(date) {
  
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based, so add 1
  const day = date.getDate();

  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  
  return formattedDate;
}
```
