
let a = { 
    value: "A",
    score: 0
}
let b = { 
    value: "B",
    score: 0
};
let c = { 
    value: "C",
    score: 0
};
let d = { 
    value: "D",
    score: 0
};
let f = { 
    value: "F",
    score: 0
};

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
function count(){
    for (var i = 0; i < scores.length; i++) {
        if(scores[i] <= 60){
            f.score++;
        } else if (scores[i] <= 70) {
            d.score++;
        } else if (scores[i] <= 80) {
            c.score++;
        } else if (scores[i] <= 90) {
            b.score++;
        } else if (scores[i] <= 100) {
            a.score++;
        }
    }
        let letterGrades = [a, b, c, d, f];
        for (var i = 0; i < letterGrades.length; i++){
        console.log (`Number of ${letterGrades[i].value}'s are ${letterGrades[i].score}`);
    }
};

count();




// -------------------- LOWEST SCORE ---------------------
scores.min = function(scores){
    return Math.min.apply( Math, scores );
};
var lowestScore = scores.min(scores);
console.log("The lowest score is", lowestScore);

// -------------------- HIGHEST SCORE ---------------------
scores.max = function(scores){
    return Math.max.apply( Math, scores );
};
var highScore = scores.max(scores);
console.log("The highest score is", highScore);