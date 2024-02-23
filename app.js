var questions = [
    {
        question: "Html Stands For _______________________",
        options: ["Hyper Text Makeup Language",
            "html",
            "Case Cading Style Sheet",
            "Hypertext markup language"
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question: "Css Stands For _______________________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language"
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question: "Js Stands For _______________________",
        options: [
            "Java Style",
            "Java Script",
            "Script",
            "Script Src"
        ],
        correctAns: "Java Script",
    },
]

// var questionDisplay = document.getElementById('questionDisplay');
// var optionDisplay = document.getElementById('optionDisplay');
// var totalQuesN = document.getElementById('totalQuesN');
// var questionCount = document.getElementById('questionCount');
// var mainDiv = document.getElementById('mainDiv');
// var resultDisplay =  document.getElementById("resultDisply");
// var index =0 ;
// var marks = 0;

// function questionDispl (){
//     questionDisplay.innerHTML = questions[index].question;

//     for ( var i=index; i<questions[index].options.length; i++){
//         var questionValue = questions[index].options[i];
//         var correctValue = questions[index].correctAns;
//         optionDisplay.innerHTML +=

//         `<button onclick="checkQ('${questionValue}', '${correctValue}')" class="col-md-5 bg-body-secondary p-3 border rounded-4 mt-2 ms-2">${questions[index].options[i]}</button>`;
//     }
//     totalQuesN.innerHTML = questions.length;
//     questionCount.innerHTML = index+1;
// }
// questionDispl()

// function checkQ(a,b){
//     if (a == b ){
//         marks++;
//         console.log(marks);
//     } else {
//         nextQuestion();
//     }
// }

// function nextQuestion(){
//     // optionDisplay.innerHTML = "";
//     if(index+1 == questions.length){
//         mainDiv.style.display = "none"
//         resultDisplay.style.display = "block"
//     } else {
//         index++;
//         questionDispl();
//     }
// }


// ==================---------------------------------------

// var quesDspl = document.getElementById("questionDisplay");
// var optionDiv = document.getElementById("optionDisplay");
// var totalQuestion = document.getElementById("totalQuesN");
// var coutnQuestion = document.getElementById("questionCount");
// var mainDiv = document.getElementById("mainDiv");
// var index = 0;
// var marks = 0;

// function showQuestion() {
//     quesDspl.innerHTML = questions[index].question;

//     for (var i = index; i < questions[index].options.length; i++) {
//         var questionValue = questions[index].options[i];
//         var correctValue = questions[index].correctAns;
//         optionDiv.innerHTML += `<button onclick="checkQ('${questionValue},${correctValue}')" class="col-md-5 bg-body-secondary p-3 border rounded-4 mt-2 ms-2">${questions[index].options[i]}</button>`
//     }
//     totalQuestion.innerHTML = questions.length
//     coutnQuestion.innerHTML = index + 1;
// }

// showQuestion();

// function nextQuestion() {
//     if (index + 1 == questions.length) {

//     } else {
//         index++;
//         showQuestion();
//     }
// }

// function checkQ(a, b) {
//     if (a == b) {
//         marks++;
//         console.log(marks);
//     } else {
//         nextQuestion();
//     }
// }

// --------------------------------------

// var questionDisplay = document.getElementById('questionDisplay');
// var optionDisplay = document.getElementById('optionDisplay');
// var totalQuesN = document.getElementById('totalQuesN');
// var questionCount = document.getElementById('questionCount');
// var mainDiv = document.getElementById('mainDiv');
// var resultDisplay = document.getElementById("resultDisply");
// var index = 0;
// var marks = 0;

// function questionDispl() {
//     optionDisplay.innerHTML = ""; 

//     questionDisplay.innerHTML = questions[index].question;

//     for (var i = 0; i < questions[index].options.length; i++) {
//         var questionValue = questions[index].options[i];
//         var correctValue = questions[index].correctAns;
//         optionDisplay.innerHTML +=
//             `<button onclick="checkQ('${questionValue}', '${correctValue}')" class="col-md-5 bg-body-secondary p-3 border rounded-4 mt-2 ms-2">${questions[index].options[i]}</button>`;
//     }
//     totalQuesN.innerHTML = questions.length;
//     questionCount.innerHTML = index + 1;
// }

// function checkQ(button,a, b) {
//     if (a == b) {
//         marks++;
//     }
// }

// function nextQuestion() {
//     if (index + 1 === questions.length) {
//         showResult();
//     } else {
//         index++;
//         questionDispl();
//     }
// }

// function showResult() {
//     var resultDisplay = document.getElementById("resultDisplay");

//     if (resultDisplay) {
//         mainDiv.style.display = "none";
//         resultDisplay.style.display = "block";
//         resultDisplay.innerHTML = `You scored ${marks} out of ${questions.length}.Percentage: ${(marks / questions.length) * 100}%`;
//     } else {
//         console.error("Result display element not found");
//     }
// }

// questionDispl();

// =====================================------------------------------------

var quesDspl = document.getElementById("questionDisplay");
var optionDispl = document.getElementById('optionDisplay');
var mainDiv = document.getElementById('mainDiv');
var totalQuestion = document.getElementById('totalQuesN');
var coutnQuestion = document.getElementById('questionCount');
var marks = 0;
var index = 0;

function questionDisplay(){
    optionDispl.innerHTML = "";
    quesDspl.innerHTML= questions[index].question;

    for (var i=0; i<questions[index].options.length; i++){
        var questionValue = questions[index].options[i];
        var correctValue = questions[index].correctAns;
        optionDispl.innerHTML +=`<button onclick="checkQuestion('${questionValue}','${correctValue}')" class="col-md-5 bg-body-secondary p-3 border rounded-4 mt-2 ms-2">${questions[index].options[i]}</button>`
    }
    totalQuestion.innerHTML=questions.length;
    coutnQuestion.innerHTML = index + 1;
}
questionDisplay();

function checkQuestion (a,b){
    if(a==b) {
        marks++;
    }
}

function nextQuestion (){
    if(index+1 === questions.length){
        resultDisplay();
    } else {
        index++;
        questionDisplay();
    }
}

function resultDisplay(){
    var resultShow = document.getElementById('resultDisplay');
    
    if (resultShow){
        mainDiv.style.display = "none";
        resultShow.style.display = "block";
        resultShow.innerHTML = `your reult is ${marks} out of ${questions.length} and percntag is ${Math.round((marks*100)/questions.length)}%`
    }
}

