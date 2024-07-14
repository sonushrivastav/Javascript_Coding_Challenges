// Q: Write a #JavaScript Program to Replace Characters of a String.

function replaceChar(str,target,replacement){
  return str.split(target).join(replacement)
}

const exmplStr = 'Hello, World!!'
const targetChar = "o"
const replaceChr = '#####'

const result = replaceChar(exmplStr,targetChar,replaceChr)
console.log(result);