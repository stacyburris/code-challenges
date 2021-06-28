// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

// EXAMPLE 1:
// Input: s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".


var removeDuplicates = function (s) {
    if (s.length < 2) return s;
    let final = [];
    for (let i = 0; i < s.length; i++) {
        let last = final[final.length - 1];
        if (s[i] !== last) {
            final.push(s[i]);
        } else {
            final.pop();
        }
    }
    return final.join('');
};