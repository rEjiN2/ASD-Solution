// Use complexity of O(N)2
function twoSumOn2(nums,target){
    let numsObj = []
    for(let i=0 ; i<nums.length-1 ; i++){
        for(let j = i +1 ; j < nums.length ; j++){
          if(nums[i] + nums[j] === target) numsObj.push([i,j])
        }
    }
    if(numsObj.length==0){
        return "No matching Records Found"
    }
    else{
        return numsObj
    }
}

// Use complexity of O(n)
function twoSumOn(nums,target){
    const numsSet = new Map([])
    for(let i = 0 ; i < nums.length ; i++){
      const dif = target - nums[i]
      const isThere =  numsSet.has(dif)
      if(isThere==true) 
          {
        return [numsSet.get(dif),i]       
          }   else{
       numsSet.set(nums[i],i)
          }   
    }
    return []
}
const nums = [11,13,5,4]
const target = 9

console.log(twoSumOn(nums,target))
console.log(twoSumOn2(nums,target))