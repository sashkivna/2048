/**
 * Created by agold on 21/09/2017.
 */
n = 4;
function matrix(n) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
        matrix[i] = [];
        for (var j = 0; j < n; j++) {
            matrix[i][j] = 0;

        }
    }
    return matrix;
}
var matr = matrix(4);
console.log(fillMatrix(matr));
function fillMatrix(matr) {
    for (var j = 0; j < n; j++) {
        matr[n - 1][0] = 2;
        matr[n - 1][n - 1] = 2;
    }
    return matr;
}

var newCell = function () {
    if (Math.random() < 0.9) {
        return 2
    }
    else {
        return 4
    }
};
//console.log(newCell());
function toTheLeft(matr) {
    /*for (var j = 0; j < n; j++) {
        if (matr[n - 1][j] === matr[n - 1][j + 1]) {
            matr[n - 1][j] += matr[n - 1][j + 1];
        } else if(matr[n - 1][j + 1])===0){
            for(var k=1; k<n; k++){
                matr[n-1][j] === matr[n - 1][j + 1]
            }
        }
    }*/
    for(var j=0; j<n; j++){
        var q=j;
        while(matr[n-1][q] ===0 && q<n){
        q++;
        }
        debugger;
        matr[n-1][j]+=matr[n-1][q];
        matr[n-1][q]=0;
    }
    //matr[n-1][q]=0;
    return matr;
}
console.log(toTheLeft(matr));
//console.log(matr);

//
// var arr = [0, 0, 2,2];
// var i=0;
// while(i<arr.length && arr[i]===0){
//
//         i++;
//     //console.log(i);
// }
// console.log(i);