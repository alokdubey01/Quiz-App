const questions = [
    {
        questionText: "Commonly used data types DO NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts",
    },
    {
        questionText: "Arrays in JavaScript can be used to store ______.",
        options: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",
        ],
        answer: "4. all of the above",
    },
    {
        questionText:
            "String values must be enclosed within _____ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes",
    },
    {
        questionText:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ],
        answer: "4. console.log",
    },
    {
        questionText:
            "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
        options: ["1. break", "2. stop", "3. halt", "4. exit"],
        answer: "1. break",
    },
];


var clock = document.getElementById("time").innerHTML = "3.00"
clock.innerHTML = "3:00"

function Start() {
    document.getElementById("welcome").style.display = 'none';
    document.getElementById("name").style.display = 'block';
}

function Next() {
    document.getElementById("name").style.display = 'none';
    document.getElementById("quiz").style.display = 'block';
}

function HighScore() {
    document.getElementById("welcome").style.display = 'none';
    document.getElementById("name").style.display = 'none';
    document.getElementById("quiz").style.display = 'none';
    document.getElementById("card_High").style.display = 'block';
}

function Back() {
    document.getElementById("card_High").style.display = 'none';
    document.getElementById("welcome").style.display = 'block';
}


var s = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}';

var obj = JSON.parse(s);

document.getElementById("user").innerHTML =
"Name: " + obj.first_name + " " + obj.last_name + "<br>" +
"Location: " + obj.location;