function ulSurround(strings) {  //[].
    //let res=strings.map(function(str) {
     //   return `<li>${str}</li>`// "<li>"+str+"</li"
    //})
    let res=strings.map((str) => `<li>${str}</li>`) // or {return `<li>${str}</li>`}
    //res.splice(0,0, "<ul>");
    res.unshift("<ul>");
    res.push("</ul>"); //res.splice(strings.length, 0, "</ul>");
    return res;
}
let ar=["123","abc", "lmn"];
console.log(`input: ${ar} output: ${ulSurround(ar)}`);
console.log(ulSurround(ar));

function count(array, element) {
    return array.reduce((res,cur) => cur==element ? res+1 : res, 0);
}
