function getMajorityElement(arr, n){
    let halfArrSize = n/2 
    // console.log(halfArrSize)
    let isMajorityEleFound = false
    for(let i=0;i<n;i++){
        let count = 0 
        for(let j=i;j<n;j++){
            if (arr[i] == arr[j]){
                count += 1 
            }
        }
        // console.log(count)
        if (count > halfArrSize){
            isMajorityEleFound = true
            return arr[i]  
        }
    }
    if (isMajorityEleFound === false){
        return "No Majority Element"
    }
    
}

// let arr = [3, 3, 4, 2, 4, 4, 2, 4, 4]
let arr = [3, 3, 4, 2, 4, 4, 2, 4]
let n = arr.length
console.log(getMajorityElement(arr, n))