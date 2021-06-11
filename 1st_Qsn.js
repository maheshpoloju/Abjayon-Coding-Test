function rotate(arr, n, d){
    for(let i=0;i<d;i++){
        let startElement = arr.shift()
        arr.push(startElement)
    }
    return arr
}

let arr = [1,2,3,4,5]
let n = arr.length
let d = 2
console.log(rotate(arr, n, d))