class Fibonaci {
  getFib(n) {
    let prevOne = (n > 0) ? 1 : 0;
    let prevTwo = (n > 2) ? 1 : 0;
    let total = prevOne + prevTwo;

    for (let i = 2; i < n; i++) {
      total = prevOne + prevTwo;
      prevTwo = prevOne;
      prevOne = total; 

      console.log('end === p1: ', prevOne, ' p2: ', prevTwo, ' total: ', total);
    }

    return total;
  }
}

let f = new Fibonaci;

console.log('returned: **** ', f.getFib(8));
