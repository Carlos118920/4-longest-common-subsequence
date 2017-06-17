function LCS(x, y) {
console.log(x,y)
  var solution = [];
  y = y.split("")
  x = x.split("")
  for(var i = 0; i < y.length; i++){
    for(var j = 0; j < x.length; j++){
      if(y[i] === x[j]){
        solution.push(x[j]);
        x = x.slice(j + 1)
        break;
      }
    }
  }
  return solution.join("");
}
