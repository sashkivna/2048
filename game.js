/**
 * Created by agold on 21/09/2017.
 */
n = prompt("Введите размерность поля", 0);

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

var matr = matrix(n);
console.log(fillMatrix(matr));

function fillMatrix(matr) {
    var i = Math.floor(Math.random() * ((n - 1) - 0 + 1)) + 0;
    var j = Math.floor(Math.random() * ((n - 1) - 0 + 1)) + 0;
    matr[i][j] = 2;
    var k = Math.floor(Math.random() * ((n - 1) - 0 + 1)) + 0;
    var l = Math.floor(Math.random() * ((n - 1) - 0 + 1)) + 0;
    if(i !==k || j!==l) {
        matr[k][l] = 2;
    }
    return matr;
}

function getNewCellValue() {
    if (Math.random() < 0.9) {
        return 2
    }
    else {
        return 4
    }
}

function setNewCellInMatr(matr) {
    //debugger;
    var i = Math.floor(Math.random() * ((n - 1) - 0 + 1)) + 0;
    var j = Math.floor(Math.random() * ((n - 1) - 0 + 1)) + 0;
    if (matr[i][j] === 0) {
        matr[i][j] = getNewCellValue();
    }
    else {
        setNewCellInMatr(matr);
    }
    return matr;
}

function toTheLeft(matr) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - 1; j++) {
            // debugger;
            var q = j + 1;
            while (matr[i][q] === 0 && q < n - 1) {
                q++;
            }
            if (matr[i][j] === 0) {
                if (matr[i][q]) {
                    matr[i][j] += matr[i][q];
                    matr[i][q] = 0;
                    for (var m = q + 1; m < n; m++) {
                        if (matr[i][j] === matr[i][m]) {
                            matr[i][j] += matr[i][m];
                            matr[i][m] = 0;
                        }
                    }
                }
                else {
                    if (matr[i][j] === matr[i][q]) {
                        matr[i][j] += matr[i][q];
                        matr[i][q] = 0;
                    }
                }
            }
            else {
                if (matr[i][j] === matr[i][q]) {
                    matr[i][j] += matr[i][q];
                    matr[i][q] = 0;
                }
            }
        }
    }
    return matr;
}

table = createTable(matr);

function createTable(matr) {
    var table = document.createElement('table');
    table.classList.add("table");
    for (var i = 0; i < n; i++) {
        var row = document.createElement('tr');
        row.classList.add("row");
        for (var j = 0; j < n; j++) {
            var cell = document.createElement('td');
            cell.classList.add("cell");
            cell.innerHTML = matr[i][j];
            row.appendChild(cell);
            table.appendChild(row);
        }
    }
    return table;
}

document.body.appendChild(table);
console.log(createTable(matr));

function fillTable(table, matr) {
    for (var i = 0; i < n; i++) {
        var rows = table.getElementsByTagName('tr');
        for (var j = 0; j < n; j++) {
            var cell = rows[i].getElementsByTagName('td');
            cell[j].innerHTML = matr[i][j];
        }
    }
    return table;
}

fillTable(table, matr);

function toTheLeftWithFilledTable() {

    if (moveCheckingToTheLeft(matr)){
        toTheLeft(matr);
        setNewCellInMatr(matr);
        fillTable(table, matr);
        if(!moveCheckingToTheLeft(matr)){
            theEnd(matr);
        }
    }

}

function toTheRight(matr) {
    for (var i = 0; i < n; i++) {
        //debugger;
        for (var j = n - 1; j > 0; j--) {
            var q = j - 1;
            while (matr[i][q] === 0 && q > 0) {
                q--;
            }

            if (matr[i][j] === 0) {

                if (matr[i][q]) {
                    matr[i][j] += matr[i][q];
                    matr[i][q] = 0;
                    for (var m = q - 1; m > 0; m--) {
                        if (matr[i][j] === matr[i][q - 1]) {
                            matr[i][j] += matr[i][q - 1];
                            matr[i][q - 1] = 0;
                        }
                    }
                }
                else {
                    if (matr[i][j] === matr[i][q]) {
                        matr[i][j] += matr[i][q];
                        matr[i][q] = 0;
                    }
                }
            }
            else {
                if (matr[i][j] === matr[i][q]) {
                    matr[i][j] += matr[i][q];
                    matr[i][q] = 0;
                }
            }
        }
    }
    return matr;
}

function toTheRightWithFilledTable() {

    if(moveCheckingToTheRight(matr)){
        toTheRight(matr);
        setNewCellInMatr(matr);
        fillTable(table, matr);
        if(!moveCheckingToTheRight(matr)){
            theEnd(matr);
        }
    }


}

function toTheUp(matr) {
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n; j++) {
            var k = i + 1;
            while (matr[k][j] === 0 && k < n - 1) {
                k++;
            }
            if (matr[i][j] === 0) {
                if (matr[k][j]) {
                    matr[i][j] += matr[k][j];
                    matr[k][j] = 0;
                    for (var m = k + 1; m < n; m++) {
                        if (matr[i][j] === matr[m][j]) {
                            matr[i][j] += matr[m][j];
                            matr[m][j] = 0;
                        }
                    }
                }
                else {
                    if (matr[i][j] === matr[k][j]) {
                        matr[i][j] += matr[k][j];
                        matr[k][j] = 0;
                    }
                }
            }
            else {
                if (matr[i][j] === matr[k][j]) {
                    matr[i][j] += matr[k][j];
                    matr[k][j] = 0;
                }
            }
        }
    }
    return matr;
}

function toTheUpWithFilledTable() {

    if(moveCheckingToTheUp(matr)){
        toTheUp(matr);
        setNewCellInMatr(matr);
        fillTable(table, matr);
        if(!moveCheckingToTheUp(matr)){
            theEnd(matr);
        }
    }


}

function toTheDown(matr) {
    for (var i = n - 1; i > 0; i--) {
        for (var j = 0; j < n; j++) {
            //debugger;
            var k = i - 1;
            while (matr[k][j] === 0 && k > 0) {
                k--;
            }
            if (matr[i][j] === 0) {
                if (matr[k][j]) {
                    matr[i][j] += matr[k][j];
                    matr[k][j] = 0;
                    for (var m = k - 1; m > 1; m--) {
                        if (matr[i][j] === matr[m][j]) {
                            matr[i][j] += matr[m][j];
                            matr[m][j] = 0;
                        }
                    }
                }
                else {
                    if (matr[i][j] === matr[k][j]) {
                        matr[i][j] += matr[k][j];
                        matr[k][j] = 0;
                    }
                }
            }
            else {
                if (matr[i][j] === matr[k][j]) {
                    matr[i][j] += matr[k][j];
                    matr[k][j] = 0;
                }
            }
        }
    }
    return matr;
}

function toTheDownWithFilledTable() {
    if(moveCheckingToTheDown(matr)) {
        toTheDown(matr);
        setNewCellInMatr(matr);
        fillTable(table, matr);
        if(!moveCheckingToTheDown(matr)){
            theEnd(matr);
        }
    }
}

function moveCheckingToTheLeft(matr) {
        for (var i = 0; i < n; i++) {
       // debugger;
        for (var j = 1; j < n; j++) {
            var leftElement = matr[i][j-1];
            var currentElement = matr[i][j];
            var canBeMoved = (leftElement === 0 || leftElement === currentElement)&&currentElement!==0;
            if (canBeMoved) {
                return true;
            }
        }
    }
    return false;
}

function moveCheckingToTheRight(matr) {
    for(var  i=0; i<n; i++){
      // debugger;
        for(var j=n-2; j>=0;j--){

            var rightElement = matr[i][j+1];
            var currentElement = matr[i][j];

            var canBeMoved = (rightElement === 0 || rightElement ===currentElement)&& currentElement!==0;
            if(canBeMoved){
                return true;
            }

        }
    }
    return false;
}

function moveCheckingToTheUp(matr) {
    for(var i=1; i<n; i++){
       // debugger;
        for(var j=0; j<n; j++){

            var upperElement = matr[i-1][j];
            var currentElement = matr[i][j];


            var canBeMoved = (upperElement === 0 || upperElement === currentElement)&& currentElement !==0;
            if(canBeMoved){
                return true;
            }
        }
    }
    return false;
}

function moveCheckingToTheDown(matr) {
    for(var i =n-2; i>=0; i--){
        for(var j=0;j<n;j++){
            var currentElement = matr[i][j];
            var downElement = matr[i+1][j];
            var canBeMoved = (downElement ===0||downElement===currentElement)&&currentElement!==0;
            if(canBeMoved){
                return true;
            }
        }
    }
    return false;
}

function theEnd(matr) {
    if(!moveCheckingToTheDown(matr)&&!moveCheckingToTheLeft(matr)&&!moveCheckingToTheRight(matr)&&!moveCheckingToTheUp(matr)){
        alert('the end!')
    }
}