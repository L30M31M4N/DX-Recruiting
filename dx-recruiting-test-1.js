function longestWordA(str){
    //Split the string by space or comma and then execute reduce function
    return str.split(/[, ]+/).reduce( (prev, curr) => {
        //Check each word length
        if(prev.length < curr.length){
            prev = curr
        }
        //If the same length
        else if(prev.length == curr.length){
            //Check number of vowels 
            var vowelsA = prev.match(/[aeiou]/gi).length;
            var vowelsB = curr.match(/[aeiou]/gi).length;
            if(vowelsB > vowelsA){
                prev = curr;
            }
        }
        return prev;
    })
}

var str = 'Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers';
console.log(longestWordA(str));