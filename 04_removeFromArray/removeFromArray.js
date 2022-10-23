const removeFromArray = function(array, ...items) {
    let removed_count = 0;
    for (j=0 ; j < array.length; j++) {
        for (i=0 ; i < items.length; i++) {
            if (array[j] === items[i]) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
