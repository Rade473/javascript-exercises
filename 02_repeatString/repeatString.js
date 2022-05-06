const repeatString = function(word,n) {
    let string = ''
   if (n < 0 ) return 'ERROR'
    for (j=0; j<n; j++){
       string+=word
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
