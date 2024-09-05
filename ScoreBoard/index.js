Score = 0;
point = 0;
homeScore = document.getElementById("home-score");
awayScore = document.getElementById("away-score");

function increaseHomeScoreBy1Point() {
    Score += 1;
    homeScore.textContent = Score;
}

function increaseHomeScoreBy2Point() {
    Score += 2;
    homeScore.textContent = Score;
}

function increaseHomeScoreBy3Point() {
    Score += 3;
    homeScore.textContent = Score;
}

function increaseAwayScoreBy1Point() {
    point += 1;
    awayScore.textContent = point;
}

function increaseAwayScoreBy2Point() {
    point += 2;
    awayScore.textContent = point;
}

function increaseAwayScoreBy3Point() {
    point += 3;
    awayScore.textContent = point;
}