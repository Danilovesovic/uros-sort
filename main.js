

function sortUros(arrayToSort){
    var sortedByNumbersFirst = arrayToSort.sort(function (a,b) {
        if(!isNaN(parseInt(a.title))){
            return -1
        }else{
            return 1
        }
    })
    var sortedByLowerNumbers = sortedByNumbersFirst.sort(function (a,b) {
        if(!isNaN(parseInt(a.title)) && !isNaN(parseInt(b.title))){
            if(parseInt(a.title) < parseInt(b.title)){
                return -1
            }else{
                return 1
            }
        }
    })
    var nowSortStrings = sortedByLowerNumbers.sort(function (a,b) {
        if(isNaN(parseInt(a.title)) && isNaN(parseInt(b.title))){
            if( a < b){
                return -1
            }else{
                return 1
            }
        }
    })
    return nowSortStrings;
}


var sorted = sortUros([{title:'bbbb'},{title:'aaaa'},{title:'1kkk'},{title:'12ttt'},{title:'gaxx'},{title:'11bcc'}]);

console.log(sorted);

