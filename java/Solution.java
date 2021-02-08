class Solution {
    /** Most efficient method */
    public int findNumbers(int[] nums) 
    {
        int counter = 0;
        for(int i = 0; i < nums.length; i++) {
            if((int)Math.log10(nums[i]) % 2 == 1) counter++;
        }
        return counter;
    }

    /** Alternate method */
    int totalEvenNos = 0;
    public int findNumbers2(int[] nums) {
        for(int num: nums){
            if(countdigits(num) % 2 == 0){
                totalEvenNos++;
            }
        }
        return totalEvenNos;
    }
    
    public int countdigits(int num){
        int count = 0;
        while(num > 0){
            count ++;
            num = num / 10;
        }
        return count;
    }
}