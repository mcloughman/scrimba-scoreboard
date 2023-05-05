let home1 = document.getElementById("btn-h1")
let home2 = document.getElementById("btn-h2")
let home3 = document.getElementById("btn-h3")
let guest1 = document.getElementById("btn-g1")
let guest2 = document.getElementById("btn-g2")
let guest3 = document.getElementById("btn-g3")

let homeh1 = document.getElementById("home-h1")
let guesth1 = document.getElementById("guest-h1")

let homeScore = 0;
let guestScore = 0;



function homeAdd(num) {
    homeScore += num
    homeh1.textContent = homeScore
    isWinning()
    
}
function guestAdd(num) {
    guestScore += num;
    guesth1.textContent = guestScore;
    isWinning()
}

function isWinning() {
    if (homeScore > guestScore) {
        homeh1.style.opacity = 1
        guesth1.style.opacity = .8;
    }
    else if (homeScore < guestScore) {
        homeh1.style.opacity = .8
        guesth1.style.opacity = 1;
    }
    
    else {
        homeh1.style.opacity = 1
        guesth1.style.opacity = 1;
    }
    
}


