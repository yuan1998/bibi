// var op = [10, 2, [20, 3, 5, [30, 3]], 3];
var op = ['1st', 11, 12, 13,
  ['2nd', 21, ['3rd', 30, ['4rd', 31, 32]], 22, [41, 42]], [55], 14];
/*
var m = [], n = [];
function po(item){
  if(item.constructor == Array){
    n.push(item);
  } 
  else if(item.constructor != Array){
    m.push(item);
  } 
}
op.forEach(po);
while (n.length) {
  if(n[0] instanceof Array) {
    n[0].forEach(po);
    n.shift();}
}
console.log(m);
*/


/*
function po() {
  var i, j, f, jio = [], jio1 = [], jio2 = [];
  for (i = 0; i < op.length; i++) {
    if (op[i].constructor != Array) {
      jio.push(op[i]);
      continue;
    }
    for (j = 0; j < op[i].length; j++) {
      if (op[i][j].constructor != Array) {
        jio1.push(op[i][j]);
        continue;
      }
      for (f = 0; f < op[i][j].length; f++) {
        if (op[i][j][f].constructor != Array) {
          jio2.push(op[i][j][f]);
          continue;
        }
      }
    }
  }
  console.log('level_1', jio);
  console.log('level_2', jio1);
  console.log('level_3', jio2);
  return jio, jio1, jio2;
}
po();
*/