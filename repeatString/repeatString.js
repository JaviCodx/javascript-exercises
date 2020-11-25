const repeatString = function(string, n) {

if (n<0) {
    return 'ERROR';
}

else {
    let newString = '';

    for (let i=0; i<n; i++){
    newString = newString + string; ;
    }
    
    return newString;
}


}

module.exports = repeatString
