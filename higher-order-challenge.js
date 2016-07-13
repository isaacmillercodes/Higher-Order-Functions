any([ 8, 9, 10, 11 ], greaterThan10);
// surprise()()
// filter([ 1, 2, 3, 4 ], onlyOdd)
// sumTwoNumbers(3)(9)

function any(array) {
  for (var i = 0; i < array.length; i++) {
    return array[i]
  }
}

function greaterThan10 (num) {
  if (num < 10) {
    return false
  } else {
    return true
  }
}
