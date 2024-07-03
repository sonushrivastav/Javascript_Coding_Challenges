function union(setA,setB){
    return new Set([...setA,...setB])
}

function interSection(setA,setB){
    return new Set([...setA].filter(x => setB.has(x)))
}

function difference(setA,setB){
    return new Set([...setB].filter(x =>!setA.has(x)))
}

function isSubset(setA,setB){
    for(let item of setA){
        if(!setB.has(item)){
            return false
        }
    }
    return true
}
const setA = new Set([1,2,3,4])
const setB = new Set([3,4,5,6,])


const unionSet = union(setA, setB)
console.log("union",unionSet);


const interSectionSet = interSection(setA, setB)
console.log("intersectio",interSectionSet);

const differenceSet = difference(setA, setB)
console.log("difference set",differenceSet);

const setC = new Set([1,2])
console.log(`is setC a subset of setA`,isSubset(setC,setA));
console.log(`is setC is subset of setB`,isSubset(setC,setB));