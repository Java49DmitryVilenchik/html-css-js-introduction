function minMax(array) {
    let minmax=array.reduce(function(arr, e){
       if (e<arr[0]) {arr[0]=e;}
       if (e>arr[1]) {arr[1]=e;}       
       return arr;        
    },[array[0],array[0]]);
    return minmax;
}

console.log(minMax([155,65,-55,2,-3,4]));
