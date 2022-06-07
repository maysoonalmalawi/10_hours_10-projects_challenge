const quizData = [
    {
        question: "Which of the following is not a type of computer code related to Program Execution?",
        a: 'Sourse Code',
        b: 'Bytecode',
        c: 'Hex code',
        d: 'Machine Code',
        correct: 'c'
    },
    {
        question: "What is the most used programming langaugse in 2022?",
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'c'
    },
    {
        question: "Which of the following is the correct way of making a string in Java?",
        a: 'String "Text";',
        b: 'String text = "text";',
        c: "String text = 'text';",
        d: 'String text = "text"',
        correct: 'b'
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Marketing Language",
        c: "Hyper Trainer Marking Language",
        d: "Hypertext Markup Leveler",
        correct: 'a'
    },
    {
        question: "What year was JavaScript launched?",
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    }
]

const btn = document.getElementById("btn");

let counter = 0;
let correctAnswers = 0;
const answerEls = document.querySelectorAll(".answer");

generateQuestion();


btn.addEventListener('click' , () => {

    const answer = getSelected();

    if(answer) {
        if(answer === quizData[counter].correct){
            correctAnswers++;
        }

        counter++;

        if(counter < quizData.length){

            generateQuestion();

        } else{
            document.getElementById("quiz").innerHTML = `<h2>You answered correctly at ${correctAnswers}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>`;
        }

    }
});


function generateQuestion(){
    deselectAnswers();
    document.getElementById("question").innerHTML = quizData[counter].question;
    document.getElementById("a-text").innerHTML = quizData[counter].a;
    document.getElementById("b-text").innerHTML = quizData[counter].b;
    document.getElementById("c-text").innerHTML = quizData[counter].c;
    document.getElementById("d-text").innerHTML = quizData[counter].d;
}

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
