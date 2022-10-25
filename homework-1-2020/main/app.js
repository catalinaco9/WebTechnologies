const distance = (a, b) => {
   //TODO: implementați funcția
   // TODO: implement the function
   const lenA = a.length + 1
   const lenB = b.length + 1
   const token = Array(lenB).fill(0).map(() =>
      Array(lenA).fill(0));
   if (typeof a !== 'string' || typeof b !== 'string') {
      throw new Error("InvalidType")
   }

   for (let i = 0; i <= a.length; i++) {
      token[0][i] = i;
   }

   for (let j = 0; j <= b.length; j++) {
      token[j][0] = j;
   }
   
   for (let j = 1; j <= b.length; j++) {
      for (let i = 1; i <= a.length; i++) {
         const x = a[i - 1] === b[j - 1] ? 0 : 1;
         token[j][i] = Math.min(
            token[j][i - 1] + 1,
            token[j - 1][i] + 1,
            token[j - 1][i - 1] + x,
         );
      }
   }
   return token[b.length][a.length];
}


module.exports.distance = distance