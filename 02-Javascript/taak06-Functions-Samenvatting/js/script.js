var score = 0;
let getal1;
let getal2;

function makeRandomNumber(){
    return Math.floor(Math.random()*99+1);
}

function showRandomNumber1(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal1").innerHTML = randomGetal;
    return randomGetal;
}

getal1 = showRandomNumber1();

function showRandomNumber2(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal2").innerHTML = randomGetal;
    return randomGetal;
}

getal2 = showRandomNumber2();


/*function geefAntwoord(antwoord){
    if(getal1 < getal2){
        //dan moet er op lager geklkikt owrden.
        
        if(antwoord == 'lager'){
            console.log(antwoord);
            document.body.style.backgroundColor = "green";
            score++;
            //dan is het antwoord correct
        }
        else{
            document.body.style.backgroundColor = "red";
            alert('Dit antwoord is fout. Er is een punt van je score verwijderd. Probeer het nog eens.');
            score--;
        }
        
        
    }
    else{
        if(antwoord =='hoger'){
            console.log(antwoord);
            document.body.style.backgroundColor = "green";
            score++;
        }
        else{
            document.body.style.backgroundColor = "red";
            alert('Dit antwoord is fout. Er is een punt van je score verwijderd. Probeer het nog eens.');
            score--;
        }
    }*/

    function geefAntwoord(antwoord){
        if(antwoord == "hoger"){
            //dan moet er op lager geklkikt owrden.
            
            if(getal1 > getal2){
                console.log(antwoord);
                document.body.style.backgroundColor = "green";
                score++;
                //dan is het antwoord correct
            }
            else{
                document.body.style.backgroundColor = "red";
                alert('Dit antwoord is fout. Er is een punt van je score verwijderd. Probeer het nog eens.');
                score--;
            }
            
            
        }
        else{
            if(getal1 < getal2){
                console.log(antwoord);
                document.body.style.backgroundColor = "green";
                score++;
            }
            else{
                document.body.style.backgroundColor = "red";
                alert('Dit antwoord is fout. Er is een punt van je score verwijderd. Probeer het nog eens.');
                score--;
            }
        }
    
    document.getElementById("score").innerHTML = score;
    function makeRandomNumber(){
        return Math.floor(Math.random()*99+1);
    }
    
    function showRandomNumber1(){
        let randomGetal = makeRandomNumber()
        document.querySelector(".getal1").innerHTML = randomGetal;
        return randomGetal;
    }
    
    getal1 = showRandomNumber1();
    
    function showRandomNumber2(){
        let randomGetal = makeRandomNumber()
        document.querySelector(".getal2").innerHTML = randomGetal;
        return randomGetal;
    }
    
    getal2 = showRandomNumber2();
}
