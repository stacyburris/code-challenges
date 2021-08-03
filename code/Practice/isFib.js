'use strict';


// 0,1,1,2,3,5,8,13,21
const isFib = (nums) => {
if(nums === 0 || nums === 1){
    return true;
}
let prev = 1;
let count = 2;
let temp = 0;
while(count <= nums) {
    if(prev + count === nums) {
        return true;
    }
    temp = prev;
    prev = count;
    count += temp;
}
return false;
}
module.exports = isFib;