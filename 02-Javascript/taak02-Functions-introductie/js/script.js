function toonAlertBox(){
    alert("Dit is een alertbox");
}

function toonPromptBox(){
    promptBox = prompt("Dit is een promptbox");
    console.log(promptBox);
}

function toonConfirmBox(){
    confirmBox = confirm("Ben je het er mee eens?");

    if(confirmBox == true){
        console.log("Ok");
    }

    else{
        console.log("dan niet");
    }
}


toonAlertBox();
toonPromptBox();
toonConfirmBox();