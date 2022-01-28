function input(e){
    e.preventDefault();
    var num = document.getElementById("number").value;

    if (isNaN(num)) {
        document.getElementById("numberSpan").innerHTML =
            " ** user must write digits only not characters";
        return false;
    }
    else if(num<1 || num>100){
        document.getElementById("numberSpan").innerHTML = 
            " ** number must in between 1 and 100";
        return false;
    }
    
        getRandomNumber(1,100, num);
}

let win = 1;
let n = 1;

function getRandomNumber(start, end, number) {   
    let randomNumber = Math.floor((Math.random() * end) + start);
    n++;
    if(number == randomNumber || win < n/10){
        alert("YOU WIN");
        win++;
    }
    else {
        alert("Better luck next time");
    }
}
