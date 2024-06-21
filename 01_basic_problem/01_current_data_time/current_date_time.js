function displayCurrentDateTime(date){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = days[date.getDay()];
    console.log(date.getDay());
    
    let hours = date.getHours()
    const minutes = date.getMinutes();
    const seconds = date.getSeconds()

    const ampm = hours >=12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12

    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds

    const dayString = `Today is : ${day}`
    const timeString = `Current time is : ${hours} ${ampm} : ${formattedMinutes} : ${formattedSeconds}`;

    return `${dayString} ${timeString}`
}

module.exports = displayCurrentDateTime