const nums =[1,2,3,4,5,6,7,8,9];
for(let i=0; i<nums.length; i++){
    
    if(nums[i]>5){
        break; // loop break kore felbe.
    }
   //console.log(nums[i]);
}

const nums1 =[1,2,-3,4,-5,-6,7,-8,9];
for(let i=0; i<nums1.length; i++){
    
    if(nums1[i]<0){
        continue; // value skip kore jabe
    }
    console.log(nums1[i]);
}