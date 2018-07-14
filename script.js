function handleSubmit() {
    let newMax = document.getElementById("maxGuess").value
    newMax = parseInt(newMax)

    clear()
    clearMain()
    clearInput()
    clearPick()
    pickGame()
}

function clearMain() {
    removeElements("#guessButton")
}
function clearPick() {
    removeElements("#pickButton")

}
function clearInput() {
    removeElements("#inputNumber")
}
function removeElements(selector) {
    let elements = document.querySelectorAll(selector);
    for (let element of elements) {
        element.remove()
    }
}

function setupHumanGuessGame() {
    clear()
    clearMain()
    clearInput()

    let humanGameOptions = document.getElementById('hGame')
    appendHumanGameInput(humanGameOptions);
    appendRestartGameButton(humanGameOptions);

    listenForEnterKeyOnHGame()

    startHguess()

}
function appendRestartGameButton(humanGameOptions) {
    let button = document.createElement('button');
    button.textContent = "New Game";
    button.setAttribute("id", "inputNumber");
    button.setAttribute("class", "newHguess");
    button.addEventListener('click', restartHguess);
    humanGameOptions.appendChild(button);
}
function appendHumanGameInput(hGame) {
    let input = document.createElement('input');
    input.setAttribute("class", "inputbox");
    input.setAttribute("id", "inputNumber");
    input.setAttribute("type", "text");
    input.setAttribute("value", "50");
    input.addEventListener('submit', runHgame);
    hGame.appendChild(input);
}

function setupComputerGuessGame() {
    clear()
    clearInput()
    clearMain()

    let computerGuessGameOptions = document.getElementById('main')

    appendMainButton("Higher", ifHigher, computerGuessGameOptions)
    appendMainButton("Lower", ifLower, computerGuessGameOptions)
    appendMainButton("Correct", ifCorrect, computerGuessGameOptions)
    appendMainButton("New Game", restartCgame, computerGuessGameOptions)

    startCgame()

}
function appendMainButton(buttonTitle, listener, divName) {
    let button = document.createElement('button');
    button.textContent = buttonTitle;
    button.setAttribute("id", "guessButton");
    button.addEventListener('click', listener);
    divName.appendChild(button);
}

function say(message) {

    document.getElementById('output').textContent += '\n' + message;
    checkTextareaHeight()

}
function clear() {
    document.getElementById('output').textContent = '';
}

function restartCgame() {
    clear();
    startCgame();
}
function restartHguess() {
    clear()
    startHguess()
}

function checkTextareaHeight() {
    var textarea = document.getElementById("output");
    if (textarea.selectionStart == textarea.selectionEnd) {
        textarea.scrollTop = textarea.scrollHeight;
    }
}

function listenForEnterKeyOnHGame() {
    listenForEnterKey("#inputNumber", runHgame)
}
function listenForEnterKeyOnSubmit() {
    listenForEnterKey("#maxGuess", handleSubmit);
}
function listenForEnterKey(selector, callback) {
    document.querySelector(selector).addEventListener('keypress', function (e) {
        // var key = e.which || e.keyCode;
        // if (key === 13) {
            console.log("HI! you pressed " + e.key)
        if (e.key === 'Enter') {
            callback();
        }
    });
}

function pickGame() {
    clearPick()
    let pickGameOptions = document.getElementById('pick')

    appendPickButton("Guess Groots Number", setupHumanGuessGame, pickGameOptions);
    appendPickButton("Groot Guesses Your Number", setupComputerGuessGame, pickGameOptions)
}
function appendPickButton(buttonTitle, listener, divName) {
    let button = document.createElement('button');
    button.textContent = buttonTitle;
    button.setAttribute("id", "pickButton");
    button.addEventListener('click', listener);
    divName.appendChild(button);
}