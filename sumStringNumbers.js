const sumStringNumbers = (str = '') => {
   const arr = str
      .split(' ')
      .map(Number);

   return arr.reduce((acc, val) => acc + val);
};

console.log(sumStringNumbers('1 5 12 76 2'));