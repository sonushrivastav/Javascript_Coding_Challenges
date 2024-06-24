function sumOfDigitInString(str){
    let sum = 0

    for(let i=0; i<str.length;i++){
        const char = str.charAt(i)
        console.log(char);
        if(char >= 0 && char <= 9){
            sum += parseInt(char)
        }
    }

    return sum
}

module.exports = sumOfDigitInString