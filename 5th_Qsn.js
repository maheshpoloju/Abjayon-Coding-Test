let arr = [
    [0,1,1,1],
    [0,0,1,1],
    [1,1,1,1],
    [0,0,0,0]
]
let newObj = {}
for(let i=0;i<arr.length;i++){
    let count = 0
    for(let j=0;j<arr.length;j++){
        if (arr[i][j] === 1){
            count += 1 
        }
    }
    newObj[i] = count
}

// console.log(newObj)
let newObjMaxValues = Object.values(newObj)
let maxValue = newObjMaxValues[0]

for (let i=1;i<=newObjMaxValues.length;i++){
    if (newObjMaxValues[i] > maxValue){
        maxValue = newObjMaxValues[i]
    }
}

// console.log(maxValue)
for(let [item,value] of Object.entries(newObj)){
    if (maxValue === value){
        console.log(item)
    }
}