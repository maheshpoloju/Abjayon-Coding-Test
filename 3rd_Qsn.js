//test case - 1 
let arr1 = [5,2,8]
let arr2 = [10,7,12]
let arr3 = [9,14,6]
//test case - 2  
// let arr1 = [15,12,18,9]
// let arr2 = [10,17,13,8]
// let arr3 = [14,16,11,5]
let n = arr1.length

let newArr=[]
let newObj = {}
for (let i=0;i<n;i++){
    for (let j=0;j<n;j++){
        for (let k=0;k<n;k++){
            let newArr = [arr1[i],arr2[j],arr3[k]]
            // console.log(newArr)
            let max = newArr[0]
            let min = newArr[0]
            for (let m=1;m<=n;m++){
                if (newArr[m] > max){
                    max = newArr[m]
                }else if(newArr[m] < min){
                    min = newArr[m]
                }
            }
            // console.log(max,min)
            let difference = max-min
            newObj[newArr] = difference
            // console.log(difference)
        }
    }
}
// console.log(Object.entries(newObj))

let differenceInNewObj = Object.values(newObj)
// console.log(differenceInNewObj)
let minDiff = differenceInNewObj[0]
for (let i=1;i<=differenceInNewObj.length;i++){
    if (minDiff > differenceInNewObj[i]){
        minDiff = differenceInNewObj[i]
    }
}
// console.log(minDiff)
let resObj = {}
for (let [keys,values] of Object.entries(newObj)){
    if (minDiff === values){
        keys = keys.split(",")
        let sum = 0
        let minValue = parseInt(keys[0])
        for(let num of keys){
            sum += parseInt(num)
        }
        resObj[keys] = sum
    }
}
// console.log(resObj)

let resObjValues = Object.values(resObj)
// console.log(differenceInNewObj)
let minVal = resObjValues[0]
for (let i=1;i<=resObjValues.length;i++){
    if (minVal > resObjValues[i]){
        minVal = resObjValues[i]
    }
}
// console.log(minVal)
let result = []
for (let [keys,values] of Object.entries(resObj)){
    if (minVal === parseInt(values)){
        keys = keys.split(",")
        // console.log(keys)
        for(let item of keys){
            result.push(parseInt(item))
        }
    }
}
result.sort()
console.log(result.reverse())