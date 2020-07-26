let color = "black";
let r;
let c;

function createGrid(row, col){
    document.getElementById('container').innerHTML = "";
    for(let i = 0; i < row; i++){
       let row = document.createElement('div');
       row.className = "row"; 
       for(let j = 0; j < col; j++){
           let box = document.createElement('div');
           box.className = "box";
           box.addEventListener('mouseover', function(){
               whileOver(box);
           });
           row.appendChild(box);
       }
       document.getElementById('container').appendChild(row);
    }
}

function whileOver(box){
    box.style.backgroundColor= color;
}

function randomColour(){
    let choices = ["purple", "green", "blue", "yellow", "red", "pink", "grey", "brown", "crimson", "coral", "chocolate", "chartreuse", "cornflowerblue"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function changeDimensions(){
    r = c = "";
    let d = prompt("How many squares per side (e.g 16x16): ");
    let cnt = 0, i = 0;
    while(d[i] != 'x'){
        r = r + d[i];
        i++;
    }
    for(let a = i + 1; a < d.length; a++){
        c += d[a];
    }
    createGrid(r,c);
}

function reset(){
    document.querySelectorAll('.box').forEach(e => e.style.backgroundColor = "white");
}

createGrid(16 ,16);

