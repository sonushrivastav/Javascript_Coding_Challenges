function validateEmail(email){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return regex.test(email)
}

console.log(validateEmail('abc@gmail.co')); 