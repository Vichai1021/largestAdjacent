function adjacentElementProduct(arr){
  
  var max = arr[0]*arr[1];
  for(var i = 1; i < arr.length-1; i++){
    if(arr[i]*arr[i+1]>max){
      max =arr[i]*arr[i+1]
    }
  }
    
  return max;

}
console.log(adjacentElementProduct([3,6,-2,-5,7,3]));
