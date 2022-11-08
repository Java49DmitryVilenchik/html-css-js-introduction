
function ulSurround(array) {
    
    let arr=array.map(function(element) {        
        element=("<li>"+element+"</li>");
        return element;
    })
    arr.splice(0,0,"<ul>");
    arr.push("</ul>");
    return arr;
}

function count(array, str) {
    let count=0;
    array.forEach(element => {if (element==str) {count++}        
    });
    return count;
}
//variant 2
function count2(array, str) {   
    let count = array.reduce( (arr, e) => {
      arr[e] = (arr[e] || 0) + 1;      
      return arr;
    }, {});
    return count[str];
    }
function arrayCopy(src,srcPos,dst,dstPos,leng) {    
    let a=src.slice(srcPos,(srcPos+leng));    
    a.forEach(function(element){
        dst.splice(dstPos,0,element);
        dstPos++;
    });        
    return dst;
}
function move(array,index,offset) {
    let element=array[index];
    array.splice(index,1);
    array.splice((index+offset),0,element);
    return array;
}


console.log(ulSurround(["I","like","JS"]));
console.log(count(["cd","ab","cd","ab","ty","ab"],"ab"));
console.log(count2(["cd","ab","cd","ab","ty","ab"],"ab"));
console.log(arrayCopy([1,2,3,4,5,6,7],3,[10,20,30,40,50,60,70],4,3));
console.log(move([1,2,3,4,5,6,7],3,-1));
console.log(move([1,2,3,4,5,6,7],2,4));