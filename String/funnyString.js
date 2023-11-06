/*
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */



function funnyString(s) {
    // Write your code here
    const reverseStr = s.split('').reverse()

    for(let i=0;i<s.length;i+=2){
        if(!s[i+1]) break

        let res = (s[i].charCodeAt(0) - s[i+1].charCodeAt(0))
        let rev = (reverseStr[i].charCodeAt(0) - reverseStr[i+1].charCodeAt(0))

        if(Math.abs(res) != Math.abs(rev)) return 'Not Funny'
    }

    return 'Funny'
}

console.log(funnyString('efhpuvqvnuwpvwysvnunostvpqvxtxsvqwqvsxtxvqpvtsonunvsywvpwunvqvupxzy'))
console.log(funnyString('bcxz'))