function minMax(array) {
    let minmax=array.reduce(function(arr, e){
       if (e<arr[0]) {arr[0]=e;}
       if (e>arr[1]) {arr[1]=e;}       
       return arr;        
    },[array[0],array[0]]);
    return minmax;
}

function deleteWithPrefix(strings, prefix) {
  let arr=strings.map(function(e) {
    if (e.includes(prefix)) {
        e=e.split(prefix).join('');
        e=e.split(' ').join('');
    }
    return e;
  })
  return arr;
}
function filterArray(arr){   
    let res= arr.filter(function (el,id) {
        if (arr.indexOf(el) === id)
        {return arr;}               
    })
    return res;
}

function getEvenOdd(numbers) {
let copy=numbers.slice();
copy.sort((a,b)=>a-b);
let evenArray=copy.filter(function(e) {   
    return e % 2==0;
})
  copy.sort((a,b)=>b-a);
  let oddArray=copy.filter(function(e) {
    return e % 2!=0;
  })
  let res=evenArray.concat(oddArray);
  return res; 
} 

console.log(minMax([155,65,-55,2,-3,4]));
console.log(filterArray(deleteWithPrefix(["abc", "old_abc", "lmn", "123", "old_lmn"], "old_")));
console.log(getEvenOdd([11,6,3,8,5,2,7,4]));