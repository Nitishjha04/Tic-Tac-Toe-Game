let cells = document.querySelectorAll('.row > div');
var flag=0;
var result=0;
document.querySelector('#btn').addEventListener("click",restartBtn);
game();

function restartBtn(){
    for(let i=0;i<cells.length;i++){
        cells[i].textContent="";
    }
    document.getElementById("result").innerHTML='';
    game();
}

function game(){
for(let i=0;i<cells.length;i++){
    cells[i].addEventListener("click",cellClicked);
}
}

function cellClicked(evt){
    if(flag==0){
        evt.target.textContent='X';
        flag=-1;
    }
    else{
        evt.target.textContent='0';
        flag=0;
    }
    result=winCheck();
    this.removeEventListener("click",cellClicked);
    
    if(result){
        for(let i=0;i<cells.length;i++){
            cells[i].removeEventListener("click",cellClicked);
        }
    }
}


function winCheck(){

    if( (cells[0].textContent=='X' && cells[1].textContent=='X' && cells[2].textContent=='X') || 
        (cells[2].textContent=='X' && cells[5].textContent=='X' && cells[8].textContent=='X') || 
        (cells[0].textContent=='X' && cells[3].textContent=='X' && cells[6].textContent=='X') || 
        (cells[6].textContent=='x' && cells[7].textContent=='X' && cells[8].textContent=='X') ||
        (cells[0].textContent=='X' && cells[4].textContent=='X' && cells[8].textContent=='X') || 
        (cells[2].textContent=='X' && cells[4].textContent=='X' && cells[6].textContent=='X') ||
        (cells[3].textContent=='X' && cells[4].textContent=='X' && cells[5].textContent=='X') || 
        (cells[1].textContent=='X' && cells[4].textContent=='X' && cells[7].textContent=='X')){
            document.getElementById("result").innerHTML="X WON!";
            return 1;
    }
    else if( (cells[0].textContent=='0' && cells[1].textContent=='0' && cells[2].textContent=='0') || 
    (cells[2].textContent=='0' && cells[5].textContent=='0' && cells[8].textContent=='0') || 
    (cells[0].textContent=='0' && cells[3].textContent=='0' && cells[6].textContent=='0') || 
    (cells[6].textContent=='0' && cells[7].textContent=='0' && cells[8].textContent=='0') ||
    (cells[0].textContent=='0' && cells[4].textContent=='0' && cells[8].textContent=='0') || 
    (cells[2].textContent=='0' && cells[4].textContent=='0' && cells[6].textContent=='0') ||
    (cells[3].textContent=='0' && cells[4].textContent=='0' && cells[5].textContent=='0') || 
    (cells[1].textContent=='0' && cells[4].textContent=='0' && cells[7].textContent=='0')){
            document.getElementById("result").innerHTML="0 WON!";
            return 1;
    }
    else if((cells[0].textContent=='0' || cells[0].textContent=='X') &&
            (cells[1].textContent=='0' || cells[1].textContent=='X') &&
            (cells[2].textContent=='0' || cells[2].textContent=='X') &&
            (cells[3].textContent=='0' || cells[3].textContent=='X') &&
            (cells[4].textContent=='0' || cells[4].textContent=='X') &&
            (cells[5].textContent=='0' || cells[5].textContent=='X') &&
            (cells[6].textContent=='0' || cells[6].textContent=='X') &&
            (cells[7].textContent=='0' || cells[7].textContent=='X') &&
            (cells[8].textContent=='0' || cells[8].textContent=='X')){
                document.getElementById("result").innerHTML="DRAW!";
                return 1;
    }
    return 0;
}

