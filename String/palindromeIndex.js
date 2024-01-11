/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
    // Write your code here
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
      if (s[i] !== s[s.length - i - 1]) {
          const s1 = s.slice(i + 1, s.length - i)
          const s2 = s1.split("").reverse().join("")
          if (s1 === s2) return i
          else return s.length - i - 1
      }
    }
    return -1;
  }

console.log(palindromeIndex('aaab'))
console.log(palindromeIndex('baa'))
console.log(palindromeIndex('aaa'))
console.log(palindromeIndex('quyjjdcgsvvsgcdjjyq'))
console.log(palindromeIndex('kjowoemiduaaxasnqghxbxkiccikxbxhgqnsaxaaudimeowojk'))
console.log(palindromeIndex('prcoitfiptvcxrvoalqmfpnqyhrubxspplrftomfehbbhefmotfrlppsxburhyqnpfmqlaorxcvtpiftiocrp'))