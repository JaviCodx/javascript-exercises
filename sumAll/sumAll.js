const sumAll = function(n1, n2) {
let sum = 0;


if (n1<0 || n2 < 0 || !Number.isInteger(n1) || !Number.isInteger(n2)){
    return 'ERROR'
}
if (n1>n2){
    let temp = n1;
    n1 = n2;
    n2 = temp;
}


for (let i=n1 ; i<=n2; i++){

    sum +=i;
}

return sum;

}

module.exports = sumAll
