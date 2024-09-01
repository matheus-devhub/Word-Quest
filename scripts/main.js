let playAgain = true;
let tries = 6;
let dynamicList = [];
let secretWordCategory;
let secretWordDrawn;
let words = [];
let autoPlay = true;

autoLoadList();

createSecretWord();
function createSecretWord(){
    const indexWord = parseInt(Math.random() * words.length);
    
    secretWordDrawn = words[indexWord].name;
    secretWordCategory = words[indexWord].category;
}

displayWordOnScreen();
function displayWordOnScreen(){
    const category = document.getElementById("category");
    category.innerHTML = secretWordCategory;

    const wordScreen = document.getElementById("secret-word");
    wordScreen.innerHTML = "";
    
    for(let i = 0; i < secretWordDrawn.length; i++){  
        if(dynamicList[i] == undefined){
            if (secretWordDrawn[i] == " ") {
                dynamicList[i] = " ";
                wordScreen.innerHTML = wordScreen.innerHTML + "<div class='spaceLetters'>" + dynamicList[i] + "</div>";
            }
            else{
                dynamicList[i] = "&nbsp;";
                wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>" + dynamicList[i] + "</div>";
            }     
        }
        else{
            if (secretWordDrawn[i] == " ") {
                dynamicList[i] = " ";
                wordScreen.innerHTML = wordScreen.innerHTML + "<div class='spaceLetters'>" + dynamicList[i] + "</div>";
            }
            else{
                wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>" + dynamicList[i] + "</div>";
            }    
        }
    }   
}

function checkChosenLetter(letter){
    document.getElementById("key-" + letter).disabled = true;
    if(tries > 0) {
        changeLetterStyle("key-" + letter, false);
        compareLists(letter);
        displayWordOnScreen();
    }    
}

function changeLetterStyle(key, condition){
    if(condition == false) {
        document.getElementById(key).style.background = "#C71585";
        document.getElementById(key).style.color = "#ffffff";
    }
    else {
        document.getElementById(key).style.background = "#008000";
        document.getElementById(key).style.color = "#ffffff";
    }
}

function compareLists(letter){
    const pos = secretWordDrawn.indexOf(letter);
    if(pos < 0){
        tries--;
        loadHangmanImage();

        if(tries == 0){
            openModal("OPS!", "Not this time ... The secret word was <br>" + secretWordDrawn);
            flashPlayAgainButton(true);
        }
    }
    else{
        changeLetterStyle("key-" + letter, true);
        for(let i = 0; i < secretWordDrawn.length; i++){
            if(secretWordDrawn[i] == letter){
                dynamicList[i] = letter;
            }
        }
    }
    
    let victory = true;
    for(let i = 0; i < secretWordDrawn.length; i++){
        if(secretWordDrawn[i] != dynamicList[i]){
            victory = false;
        }
    }

    if(victory == true) {
        openModal("CONGRATULATIONS!", "You won...");
        tries = 0;
        flashPlayAgainButton(true);
    }
}

async function delay(time){
    return new Promise(x => setTimeout(x, time));     
}

function loadHangmanImage(){
    switch(tries){
        case 5:
            document.getElementById("image").style.background  = "url('./../img/hanging1.png')";
            break;
        case 4:
            document.getElementById("image").style.background  = "url('./../img/hanging2.png')";
            break;
        case 3:
            document.getElementById("image").style.background  = "url('./../img/hanging3.png')";
            break;
        case 2:
            document.getElementById("image").style.background  = "url('./../img/hanging4.png')";
            break;
        case 1:
            document.getElementById("image").style.background  = "url('./../img/hanging5.png')";
            break;
        case 0:
            document.getElementById("image").style.background  = "url('./../img/hanging6.png')";
            break;
        default:
            document.getElementById("image").style.background  = "url('./../img/hanging.png')";
            break;
    }
}

function openModal(title, message){
    let modalTitle = document.getElementById("exampleModalLabel");
    modalTitle.innerText = title;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = message;

    $("#myModal").modal({
        show: true
    });
}

let btnRestart = document.querySelector("#btnRestart");
btnRestart.addEventListener("click", function(){
    playAgain = false;
    location.reload();
});

function automaticList(){
    if (autoPlay == true) {
        document.getElementById("autoPlay").innerHTML = "<i class='bx bx-play-circle'></i>";
        words = [];
        autoPlay = false;

        document.getElementById("openModalAddWord").style.display = "block";
        document.getElementById("status").innerHTML = "Manual Mode";
    }
    else if(autoPlay == false){
        document.getElementById("autoPlay").innerHTML = "<i class='bx bx-pause-circle'></i>";
        autoPlay = true;

        document.getElementById("openModalAddWord").style.display = "none";
        document.getElementById("status").innerHTML = "Automatic Mode";
    }
}

const modal = document.getElementById("alert-modal");

const btnOpenModal = document.getElementById("openModalAddWord");
btnOpenModal.onclick = function(){
    modal.style.display = "block";
}

const btnCloseModal = document.getElementById("closeModal");
btnCloseModal.onclick = function(){ 
    modal.style.display = "none";
    document.getElementById("addWord").value = "";
    document.getElementById("addCategory").value = ""; 
}

window.onclick = function(event){ 
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("addWord").value = "";
        document.getElementById("addCategory").value = ""; 
    } 
}

function autoLoadList(){
    words = [
        word001 = {
            name: "IRELAND",
            category:"PLACES"
        },
        word002 = {
            name: "ECUADOR",
            category:"PLACES"
        },
        word003 = {
            name: "CHILE",
            category:"PLACES"
        },
        word004 = {
            name: "INDONESIA",
            category:"PLACES"
        },
        word005 = {
            name: "MALDIVES",
            category:"PLACES"
        },
        word006 = {
            name: "ENGLAND",
            category:"PLACES"
        },
        word007 = {
            name: "GREENLAND",
            category:"PLACES"
        },
        word008 = {
            name: "UZBEKISTAN",
            category:"PLACES"
        },
        word009 = {
            name: "INDONESIA",
            category:"PLACES"
        },
        word010 = {
            name: "CREGUENHEM",
            category:"PLACES"
        },
        word011 = {
            name: "BICYCLE",
            category:"TRANSPORT"
        },
        word012 = {
            name: "BOAT",
            category:"TRANSPORT"
        },
        word013 = {
            name: "SHIP",
            category:"TRANSPORT"
        },
        word014 = {
            name: "CABLE CAR",
            category:"TRANSPORT"
        },
        word015 = {
            name: "MOTORCYCLE",
            category:"TRANSPORT"
        },
        word016 = {
            name: "BOAT",
            category:"TRANSPORT"
        },
        word017 = {
            name: "AIRCRAFT",
            category:"TRANSPORT"
        },
        word018 = {
            name: "TRAIN",
            category:"TRANSPORT"
        },
        word019 = {
            name: "KAYAK",
            category:"TRANSPORT"
        },
        word020 = {
            name: "FUNICULAR",
            category:"TRANSPORT"
        },
        word021 = {
            name: "CUP",
            category:"OBJECTS"
        },
        word022 = {
            name: "COIN",
            category:"OBJECTS"
        },
        word023 = {
            name: "ADHESIVE TAPE",
            category:"OBJECTS"
        },
        word024 = {
            name: "BELL",
            category:"OBJECTS"
        },
        word025 = {
            name: "SHOWER",
            category:"OBJECTS"
        },
        word026 = {
            name: "STOOL",
            category:"OBJECTS"
        },
        word027 = {
            name: "LAMP",
            category:"OBJECTS"
        },
        word028 = {
            name: "JAR",
            category:"OBJECTS"
        },
        word029 = {
            name: "CURTAIN",
            category:"OBJECTS"
        },
        word030 = {
            name: "PENCIL",
            category:"OBJECTS"
        },
        word031 = {
            name: "WATERMELON",
            category:"FOODS"
        },
        word032 = {
            name: "PEANUT",
            category:"FOODS"
        },
        word033 = {
            name: "ESFIRRA",
            category:"FOODS"
        },
        word034 = {
            name: "STEW",
            category:"FOODS"
        },
        word035 = {
            name: "DINNER",
            category:"FOODS"
        },
        word036 = {
            name: "TASTY",
            category:"FOODS"
        },
        word037 = {
            name: "BREAKFAST",
            category:"FOODS"
        },
        word038 = {
            name: "CHEW",
            category:"FOODS"
        },
        word039 = {
            name: "SWALLOW",
            category:"FOODS"
        },
        word040 = {
            name: "CONFECTIONERY",
            category:"FOODS"
        },
        word041 = {
            name: "DRAGON",
            category:"ANIMALS"
        },
        word042 = {
            name: "CHICKEN",
            category:"ANIMALS"
        },
        word043 = {
            name: "PEACOCK",
            category:"ANIMALS"
        },
        word044 = {
            name: "CAMEL",
            category:"ANIMALS"
        },
        word045 = {
            name: "TURKEY",
            category:"ANIMALS"
        },
        word046 = {
            name: "ZEBRA",
            category:"ANIMALS"
        },
        word047 = {
            name: "DROMEDARY",
            category:"ANIMALS"
        },
        word048 = {
            name: "CALANGO",
            category:"ANIMALS"
        },
        word049 = {
            name: "TAMARIND",
            category:"ANIMALS"
        },
        word050 = {
            name: "GECKO",
            category:"ANIMALS"
        },
        word051 = {
            name: "HIPPOPOTAMUS",
            category:"ANIMALS"
        },
        word052 = {
            name: "ICE AGE",
            category:"TV AND MOVIES"
        },
        word053 = {
            name: "SPIDER-MAN",
            category:"TV AND MOVIES"
        },
        word054 = {
            name: "MONSTER HOUSE",
            category:"TV AND MOVIES"
        },
        word055 = {
            name: "PRIME TIME",
            category:"TV AND MOVIES"
        },
        word056 = {
            name: "STRANGER THINGS",
            category:"TV AND MOVIES"
        },
        word057 = {
            name: "COWBOY",
            category:"TV AND MOVIES"
        },
        word058 = {
            name: "WONDER WOMAN",
            category:"TV AND MOVIES"
        },
        word059 = {
            name: "THE INCREDIBLE HULK",
            category:"TV AND MOVIES"
        },
        word060 = {
            name: "SPONGEBOB",
            category:"TV AND MOVIES"
        },
        word061 = {
            name: "Panic in the TV",
            category:"TV AND MOVIES"
        }
    ];
}

function addWord(){
    let addWord = document.getElementById("addWord").value.toUpperCase();
    let addCategory = document.getElementById("addCategory").value.toUpperCase();

    if (isNullOrWhiteSpace(addWord) || isNullOrWhiteSpace(addCategory) || addWord.length < 3 || addCategory.length < 3) {
        openModal("ATTENTION"," Invalid Word and/or Category");
        return;
    }

    let word = {
        name: addWord,
        category: addCategory
    };

    words.push(word);  
    drawWord();
    
    document.getElementById("addWord").value = "";
    document.getElementById("addCategory").value = "";
}

function isNullOrWhiteSpace(input){
    return !input || !input.trim();
}

function drawWord(){
    if(autoPlay == true){
        location.reload();  
    }
    else{
        if(words.length > 0){
            dynamicList = [];
            createSecretWord();
            displayWordOnScreen();
            resetKeys();
            tries = 6;
            flashPlayAgainButton(false);
        }
    }
}

function resetKeys(){
    let keys = document.querySelectorAll(".keys > button");
    keys.forEach((x) => {
        x.style.background = "#FFFFFF";
        x.style.color = "#8B008B";
        x.disabled = false;
    });
}

async function flashPlayAgainButton(shouldPlay){
    if(shouldPlay){
        document.getElementById("playAgain").style.display = "block";
    }
    else{
        document.getElementById("playAgain").style.display = "none";
    }
}
