const leapYears = function(year) {
    try {
        if (false){
            throw err;
        }
        
        if ((year %4 == 0 && year %100 != 0 )|| year %400 == 0) {
            return true;
        }
        else { return false;}
        
    }
    catch (err) {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = leapYears;
