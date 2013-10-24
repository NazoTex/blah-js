var samp = "Lots of words that mean nothing special";
var garble = "fan!? wine";

function LongestWord(sen) { 
  
  sen = sen.split(" ");
  var long = "";
  
  for (var i = 0; i < sen.length; i++){
    var check = "";
    
    for (var l = 0; l < sen[i].length; l++) {
      if (/[a-zA-Z]/.test(sen[i][l])){
        check += sen[i][l];
      }
    }
    
    
    if (long.length < check.length) {
      long = check;
    } 
  }
  return long;       
}

console.log(LongestWord());
