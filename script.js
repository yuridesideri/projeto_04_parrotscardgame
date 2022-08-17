const mainInput = document.querySelector("input");
const mainButton = document.querySelector(".game-settings button");

function flipCard(element)
{
    element.children[0].classList.toggle('fronty');
    element.children[1].classList.toggle('back-image');
}

function shuffleArray(array)
{
    let tmp;
    let num;
    for (let i = 0; i < array.length; i++)
    {
        num = Math.floor(Math.random() * array.length);
        tmp = array[i];
        array[i] = array[num];
        array[num] = tmp;
    }
    return array;
}

function createCards(cardNumber)
{
    let cards = new Array(cardNumber);
    for (let i = 0; i < cardNumber; i = i + 2)
    {
        cards[i] = [`<div onclick="flipCard(this)" class="in-game-card card${i/2} pair1"><div class='front-image face'><img src='arquivos/front.png' alt=''></div> <div class='back-image face'><img src='arquivos/gif${i/2}.gif' alt=''></div></div>`];
        cards[i + 1] = [`<div onclick="flipCard(this)" class="in-game-card card${i/2} pair2"><div class='front-image face'><img src='arquivos/front.png' alt=''></div> <div class='back-image face'><img src='arquivos/gif${i/2}.gif' alt=''></div></div>`];
    }
    const shuffledArray = shuffleArray(cards);
    return shuffledArray;
}

function printCards(array)
{
    let bigText = "";
    let gameTable = document.querySelector(".in-game-background main");
    for(let i = 0; i < array.length; i++)
    {
        bigText += array[i];
    }
    gameTable.innerHTML = bigText;
}

function startGame(cardNumber)
{
    console.log("O Jogo começou!");
    document.querySelector("#in-game").style.display = 'block';
    let cards = createCards(cardNumber);
    printCards(cards);
    //startTimer();  TO-DO
}

function helpStartGame()
{
    let text = document.querySelector(".difficulty");
    text.classList.add('red-alert-animation');
    text.innerHTML = 'Type an even from 4 to 14'
    setTimeout(() => {text.classList.remove('red-alert-animation')}, 1000);
    setTimeout(() => {text.innerHTML = 'TYPE IN THE NUMBER OF CARDS'}, 3000);

}


function checkStart()
{
    let cardNumber = mainInput.value;
    if (cardNumber >= 4 && cardNumber <= 14 && cardNumber % 2 == 0)
    {
        document.querySelector("#new-game").style.display = 'none';
        return startGame(cardNumber);
    }
    else 
    {
        return helpStartGame();
    }
}

mainButton.onclick = function(){checkStart()};