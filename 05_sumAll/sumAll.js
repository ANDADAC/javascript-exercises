const sumAll = function(numA, numB) {
    try{
        if (
            (typeof numA != "number") || (typeof numB != "number") 
            || numA<0 || numB<0
        ) {throw 'ERROR'}
        if (numB > numA) {
            let sum = 0;
            for (i=numA; i<=numB; i++){
                sum = sum + i;
            }
            return sum;
        }
        else if (numB < numA) {
            let sum = 0;
            for (i=numB; i<=numA; i++){
                sum = sum + i;
            }
            return sum;
        }
    }
    catch (err)
    {
        return err;
    }

};

// Do not edit below this line
module.exports = sumAll;
