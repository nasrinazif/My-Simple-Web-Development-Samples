var testVar = 20;

function isEven(num){
  if(num % 2 === 0){
    return true;
  }
  else {
    return false;
  }
}

function factorial(numFact){
  result = 1;
  while(numFact > 0){
    result *= numFact;
    numFact -= 1;
  }
  return result;
}

function kebabToSnake(str){
  var snakeResult = str.replace(/-/g, "_");
  return snakeResult;
}
