let btnRef = document.querySelectorAll('.button-option');
let popupRef = document.querySelector('.popup');
let newgameBtn = document.querySelector('#new-game');
let restartBtn = document.querySelector('#restart');
let msgRef = document.querySelector('#message');

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
];

let xTurn = true;
let count = 0;

const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    //enable popup
    popupRef.classList.remove("hide");
  };

//  enable buttons for new game:

const enableButtons = () => {
    btnRef.forEach((element) => {
      element.innerText = "";
      element.disabled = false;
    });
    //disable popup
    popupRef.classList.add("hide");
};

// executing when player wins:
const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
      msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    } else {
      msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
    }
  };
  

  const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
  };

//  new game
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
  });

restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
  });

// win logic
const winChecker = () => {
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];

        if (element1 != "" && (element2 != "") & (element3 != "")) {
            if (element1 == element2 && element2 == element3) {
                winFunction(element1);
            }
        }
    }

}

btnRef.forEach(button =>{
    button.addEventListener('click', ()=>{
        // Display Values
    console.log('clicked board');

        if(xTurn){
            xTurn = false;
            button.textContent = 'X';
            button.disabled = true;
        }
        else{
            xTurn = true;
            button.textContent = 'O';
            button.disabled = true;
        }
        // increase cound of each click
        if(count === 9){
            // its a tie
            drawFunction();
        }
        winChecker();
    })
})

window.onload = enableButtons;