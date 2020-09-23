function betterRound(number, precision) {
  var numberString = number.toString(); 
  var decimalIndex = numberString.indexOf(".");
  var decimalLength = numberString.length - decimalIndex - 1;
  var decimalDifference = precision - decimalLength;
  
  if(precision === undefined) {
    var precision = 0;
  }

  if(decimalIndex < 0){
    decimalLength = 0
    decimalIndex = numberString.length;
    decimalDifference = precision - 0;
  }

  var noDecimal = numberString.slice(0, decimalIndex) + numberString.slice(decimalIndex + 1, numberString.length);

  if(decimalLength < precision) {
    noDecimal = noDecimal.concat('0'.repeat(decimalDifference))
    return noDecimal.slice(0, decimalIndex) + '.' + noDecimal.slice(decimalIndex, noDecimal.length)
  };

  var newDecimal = noDecimal.slice(0, decimalIndex + precision) + '.' + noDecimal.slice(decimalIndex + precision, noDecimal.length);
  
  precision = "1".concat('0'.repeat(precision));
  
  if(Math.floor(number) === number) {
  newDecimal = number * precision;
  }
   
  return (Math.round(newDecimal))/precision;  
};
