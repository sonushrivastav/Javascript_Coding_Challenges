function getCurrentDate(date){
     const year = date.getFullYear();
     const month = date.getMonth() + 1;
     const day = date.getDate();
      
     const formattedDate = `${year}-${month < 10 ? '0' + month :month}-${day < 10 ? '0' + day : day}`;
     return formattedDate

}

module.exports = getCurrentDate;