var k
for (k = 1; k < 10; k++) {
  setTimeout( (function (_k) {return function() { alert(_k) }
  } )
  (k), k * 100)
}