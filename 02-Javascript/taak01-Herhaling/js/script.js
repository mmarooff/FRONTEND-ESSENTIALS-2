strNaam = prompt("Hoe heet je?");
boolNaamCorrect = confirm("Dus je heet " + strNaam +"?"); 

if(boolNaamCorrect == true) {
    alert("Welkom, " + strNaam +"!");
}

else {
    alert("Oei, ik weet niet hoe je heet, toch van harte welkom!");
}