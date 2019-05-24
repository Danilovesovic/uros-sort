

function sortUros(arrayToSort){
    var sortedByNumbersFirst = arrayToSort.sort(function (a,b) {
        if(!isNaN(parseInt(a))){
            return -1
        }else{
            return 1
        }
    })
    var sortedByLowerNumbers = sortedByNumbersFirst.sort(function (a,b) {
        if(!isNaN(parseInt(a)) && !isNaN(parseInt(b))){
            if(parseInt(a) < parseInt(b)){
                return -1
            }else{
                return 1
            }
        }
    })
    var nowSortStrings = sortedByLowerNumbers.sort(function (a,b) {
        if(isNaN(parseInt(a)) && isNaN(parseInt(b))){
            if( a < b){
                return -1
            }else{
                return 1
            }
        }
    })
    return nowSortStrings;
}


var sorted = sortUros(['bbbb','aaaa','1kkk','12ttt','gaxx','11bcc']);

console.log(sorted);

