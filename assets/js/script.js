const gamer = document.getElementById('gamer');
const dev = document.getElementById('dev');
const btns = document.querySelectorAll('.btn');
const tie = document.querySelector('.tie');
const hintGamer = document.querySelector('.hint');

let gamerPoints = 0;
let devPoints = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const devChoice = Math.floor(Math.random() * 3);
        const type = e.currentTarget.classList;
        hintGamer.style.display = 'none';
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("pointWon");
            btns[i].classList.remove("pointLost");
            btns[i].classList.remove("tiePoints");
        }
        tie.style.display = 'none';
        updatePoints(type, devChoice);

        gamer.textContent = gamerPoints;
        dev.textContent = devPoints;
        gameFinished();
    })
})

const gameFinished = () => {
    if (gamerPoints === 3) {
        hintGamer.textContent = 'You Won';
        hintGamer.style.display = 'block';
        gamerPoints = 0;
        devPoints = 0;
    } else if (devPoints === 3) {
        hintGamer.textContent = 'You Lost';
        hintGamer.style.display = 'block';
        gamerPoints = 0;
        devPoints = 0;
    }
}

const updatePoints = (targetElement, currentDevButtonIndex) => {
    if (targetElement.contains('paper') && btns[currentDevButtonIndex].classList.contains('paper')) {
        btns[0].classList.add("tiePoints"); // tie
        tie.style.display = 'block';
    } else if (targetElement.contains('paper') && btns[currentDevButtonIndex].classList.contains('rock')) {
        gamerPoints += 0;
        devPoints += 1;
        btns[0].classList.add("pointLost"); //gamer lost point
    } else if (targetElement.contains('paper') && btns[currentDevButtonIndex].classList.contains('scissors')) {
        gamerPoints += 1;
        devPoints += 0;
        btns[0].classList.add("pointWon"); // gamer won point
    }

    if (targetElement.contains('rock') && btns[currentDevButtonIndex].classList.contains('paper')) {
        gamerPoints += 0;
        devPoints += 1;
        btns[1].classList.add("pointLost"); //gamer lost point
    } else if (targetElement.contains('rock') && btns[currentDevButtonIndex].classList.contains('rock')) {
        btns[1].classList.add("tiePoints"); // tie
        tie.style.display = 'block';
    } else if (targetElement.contains('rock') && btns[currentDevButtonIndex].classList.contains('scissors')) {
        gamerPoints += 1;
        devPoints += 0;
        btns[1].classList.add("pointWon"); // gamer won point
    }

    if (targetElement.contains('scissors') && btns[currentDevButtonIndex].classList.contains('paper')) {
        gamerPoints += 1;
        devPoints += 0;
        btns[2].classList.add("pointWon");  // gamer won point
    } else if (targetElement.contains('scissors') && btns[currentDevButtonIndex].classList.contains('rock')) {
        gamerPoints += 0;
        devPoints += 1;
        btns[2].classList.add("pointLost"); //gamer lost point
    } else if (targetElement.contains('scissors') && btns[currentDevButtonIndex].classList.contains('scissors')) {
        btns[2].classList.add("tiePoints"); // tie
        tie.style.display = 'block';
    }
}





