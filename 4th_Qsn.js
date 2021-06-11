let matrix = [
    [1,2,3],
    [9,8,7],
    [4,5,6]
]
// let matrix = [
//     [10,10,2,0,20,4],
//     [1,0,0,30,2,5],
//     [0,10,4,0,2,0],
//     [1,0,2,20,0,4]
// ]
let m = matrix.length
let n = matrix[0].length
// console.log(m,n)

for(let i=1;i<m;i++){
    for(let j=0;j<n;j++){
        if(j > 0 && j < n-1){
            
            matrix[i][j] += Math.max(matrix[i-1][j],matrix[i-1][j-1],matrix[i-1][j+1])
        }
        else if (j > 0){
            matrix[i][j] += Math.max(matrix[i-1][j],matrix[i-1][j-1])
        }
        else if(j < n-1){
            matrix[i][j] += Math.max(matrix[i-1][j],matrix[i-1][j+1])
        }
    }
}
// console.log(matrix)
console.log(Math.max(...matrix[m-1]))