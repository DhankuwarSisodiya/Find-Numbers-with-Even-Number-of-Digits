/**
 * @param {number[]} nums
 * @return {number}
 */

 /** Method 1 */
var findNumbers = function(nums) {
    let counter = 0;
    nums.forEach(num => {
        if(parseInt(Math.log10(num)) % 2 == 1){
            counter++;
        }
    })
    return counter;
};

/** Method 2 */
let totalEvenNos = 0;
var findNumbers = function(nums) {
    nums.forEach(num => {
        if(countdigits(num) % 2 == 0){
            totalEvenNos++;
        }
    })
    return totalEvenNos;
};

var countdigits = function(num){
    let count = 0;
        while(parseInt(num) > 0){ 
            count ++;
            num = num / 10;
        }
        return count;
}