const passwordCharacters = [1,2,3,4,5,6,7,8,9,0,"!","@","#","$","%","^","&","*","(",")","_","-","=","+","`","~","|",".",","]; 

const generateBtn = document.getElementById("generate-btn");
const displayEl = document.getElementById("display-el");
const inputEl = document.getElementById("input-el");

const generatePassword = (n = 16) => {
    let password = "";
    for (let i = 0; i < n; i++) {
        password += passwordCharacters[Math.floor(Math.random()*29)];
    }
    return password;
}

const renderPasswords = () => {
    let passwordGrid = "";
    for(let i=0 ; i<4 ; i++) {
        if(inputEl.value==="") {
            displayEl.children[i].textContent = generatePassword();    
        }
        else {
            displayEl.children[i].textContent = generatePassword(inputEl.value);
        }
    }
}
inputEl.addEventListener("keyup", (event) => {
    if(event.keyCode===13) {
        renderPasswords();
    }
})
generateBtn.addEventListener("click", renderPasswords);