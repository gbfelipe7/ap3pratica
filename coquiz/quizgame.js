var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizImg = document.getElementById("quizImg");
var quizQuestion = document.getElementById("quizQuestion");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;


let questions = [{
    question: "Qual a melhor forma de prevenir o contágio?",
    imgSrc: "q1.jpg",
    choiceA: "Usar máscara",
    choiceB: "Lavar as mãos constantemente",
    choiceC: "Evitar o contato físico",
    choiceD: "Todas as respostas",
    correctAnswer: "D"
}, {
    question: "Qual o nome do agente causador da doença?",
    imgSrc: "q2.jpg",
    choiceA: "SARS-CoV-2",
    choiceB: "SARS-CoV-19",
    choiceC: "SARS-CoVid-2",
    choiceD: "SARS-CoV",
    correctAnswer: "A"
}, {
    question: "Qual grupo corre mais risco de vida com a doença?",
    imgSrc: "q3.jpg",
    choiceA: "Crianças",
    choiceB: "Adultos",
    choiceC: "Adolescentes",
    choiceD: "Idosos",
    correctAnswer: "D"
},{
    question: "Em que país o corona vírus teve sua primeira aparição?",
    imgSrc: "q4.jpg",
    choiceA: "Japão",
    choiceB: "China",
    choiceC: "Coréia",
    choiceD: "Brasil",
    correctAnswer: "B"
}, {
    question: "Qual é um dos principais sintomas do corona vírus?",
    imgSrc: "q5.jpg",
    choiceA: "Diarréia",
    choiceB: "Dor de cabeça",
    choiceC: "Febre",
    choiceD: "Manchas no corpo",
    correctAnswer: "C"
}, {
    question: "A hidroxicloroquina é eficaz contra o corona vírus?",
    imgSrc: "q6.jpg",
    choiceA: "Sim",
    choiceB: "Apenas durante os primeiros sintomas",
    choiceC: "Apenas no final do tratamento",
    choiceD: "Não há comprovação científica",
    correctAnswer: "D"
}, {
    question: "Qual dessas ações deve ser evitada na rua para a prevenção da doença?",
    imgSrc: "q7.jpg",
    choiceA: "Passar alcool em gel",
    choiceB: "Coçar os olhos",
    choiceC: "Manter o distanciamento social",
    choiceD: "Todas as alternativas",
    correctAnswer: "B"
}, {
    question: "O que é uma pessoa assintomática?",
    imgSrc: "q8.jpg",
    choiceA: "Uma pessoa imune à doença",
    choiceB: "Uma pessoa que apresenta os sintomas sem estar doente",
    choiceC: "Uma pessoa que não morre com a doença",
    choiceD: "Uma pessoa que teve a doença e não apresentou nenhum sintoma",
    correctAnswer: "D"
}, {
    question: "Em que ano surgiu o primeiro caso de covid-19?",
    imgSrc: "q9.jpg",
    choiceA: "2019",
    choiceB: "2020",
    choiceC: "1960",
    choiceD: "2018",
    correctAnswer: "A"
}, {
    question: "Quanto tempo uma pessoa com suspeita de covid deve ser afastada de sua atividades?",
    imgSrc: "q10.jpg",
    choiceA: "5 dias",
    choiceB: "15 dias",
    choiceC: "40 dias",
    choiceD: "12 dias",
    correctAnswer: "B"	
	

}, ];


var questionIndex = 0;


function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p> " +(questionIndex+1) + ": " + q.question + "</p>";
    quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}


function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> Você acertou " + score + " de 10!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p> Poxa, você foi mal :( <p> Pesquise mais sobre a pandemia e refaça o teste.</p>";
        quizImg = "great.jpg"
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Ok! <p> Você sabe sobre a pandemia, mas precisa estudar mais.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>GREAT SCOTT!<p> Você sabe muito! <p> Deveria mandar o currículo para a OMS!</p>"
    }
    scoreMessage.style.display = "block";
}


function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>CERTA RESPOSTA!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>ERRADO :(</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>CERTA RESPOSTA!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>ERRADO :(</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
    }
}