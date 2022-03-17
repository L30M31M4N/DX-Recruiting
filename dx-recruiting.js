function longestWordA(str){
    return str.split(/[, ]+/).reduce( (prev, curr) => {
        if(prev.length < curr.length){
            prev = curr
        }
        else if(prev.length == curr.length){
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