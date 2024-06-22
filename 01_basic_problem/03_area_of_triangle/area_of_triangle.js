function calculateTriangleArea(a,b,c){
   const semiParameter = (a+b+c)/2

   const area = Math.sqrt(semiParameter*(semiParameter-a) * (semiParameter-b) * (semiParameter-c))
   return area
}


module.exports = calculateTriangleArea