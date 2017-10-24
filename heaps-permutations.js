//https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-no-repeats-please/16037

function permAlone(str) {
    var splitStr = str.split(""); //splits string to an array for compatibility with heaps algorithm 
    var permutations =[];//empty var to push permutations into
    //var noRepeats =[];
  
    //http://dsernst.com/2014/12/14/heaps-permutation-algorithm-in-javascript/
    var swap = function (array, pos1, pos2) { //swaps out the values 
        var temp = array[pos1];
        array[pos1] = array[pos2];
        array[pos2] = temp;
    };

    //https://www.youtube.com/watch?v=Ej1qVlO6Tlk 
    var heapsPermute = function (array, output, n) {//generates the permutations
        n = n || array.length; // set n default to array.length otherwise n=n
        if (n === 1) {//if length=1, there aren't permutations, so output the array of 1 
            output(array);
        } else {
            for (var i = 1; i <= n; i += 1) {//incrementing i(digits within array), decrimenting n(length)
                heapsPermute(array, output, n - 1);
                if (n % 2) { //if it's even, swap with n-1 (length minus 1)
                    var j = 1;
                } else {
                    var j = i;//if it's odd, swap with the i-th element
                }
                swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
            }
        }
    };

    // Outputs the permutations
    var print = function(input){
        var joined = input.join("");//joins the array of letters back to a string
        permutations.push(joined);//pushes the string to the empty array above
    };

    heapsPermute(splitStr, print);
    return(permutations);
}

console.log(permAlone('abc'));

