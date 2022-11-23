// not optimate, not good
function isAnagram(str1,str2) {
    return Array.from(str1).sort().join('')==
    Array.from(str2).sort().join('')
}

console.log(isAnagram("yellow", "welloy"));
console.log(isAnagram("yelllw", "welloy"));

function isAn3(str1,str2) {
    let res=false;
    if (str1.length==str2.length) {
        
        const str1Occurences=getSymbolOccurrences(str1);
        res=checkAnagram(str1Occurences, str2);

    }
    return res;
}

function getSymbolOccurrences(string) {
    const stringArray=Array.from(string);
    return stringArray.reduce((res, cur) => {
        if (res[cur]==undefined) {
            res[cur]=1;
        } else {
            res[cur]++;
        }
        return res;
    }, {});
}

function checkAnagram(occurrences, string) {
    
    const stringArray=Array.from(string);
    
    return stringArray.every(symbol => {
        let res=false;
        if (occurrences[symbol]) {
            res=true;
            occurrences[symbol]--;
        }
        return res;
    })
          
}
console.log(isAn3("yellow","oolley"));