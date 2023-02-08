let demo = false;
// the main button that will start the quiz and add question to the quiz
let btnStart = document.createElement('button'), // the start quiz
 btnQuestion = document.createElement('button'), // the add question
 image = document.getElementById('image');
image.classList.add('row');
btnStart.innerText = "Start Quiz";
btnQuestion.innerText = "Add Question";
let div = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
div.className = 'col-6 justify-content-center btn';
div2.className = 'justify-content-center';
div3.className = 'justify-content-center mt-2';
div3.innerHTML = 
`<a class="ui inverted red button col-7 justify-content-cente mt-2" href="https://wikipedia.tlm.cloud/wikipedia_en_computer_2017-04/A/Hippocampus.html">Study of the Brain</a>`
btnStart.className = "ui inverted red button col-7 justify-content-center";
btnQuestion.className = "ui inverted red button mt-3 col-7  justify-content-center";
btnStart.id = "btn-open";
btnQuestion.id = "btn-sub";
div.appendChild(btnStart);
div.appendChild(div2);
div2.appendChild(btnQuestion);
div2.appendChild(div3);
image.appendChild(div);
let section = document.getElementById('section'),
    contentLabel = document.getElementById('content'),
    brainGame = document.getElementById('brainGame'),
    brain = document.getElementById('brain'),
    anatomy = document.getElementById('anatomy'),
    questionToAdd = document.getElementById('questionToAdd');
// functions for the buttons
btnStart.addEventListener("click", function () {
    section.classList.remove('hiddenFromView');
    contentLabel.classList.remove('hiddenFromView');
    brainGame.classList.remove('hiddenFromView');
    brain.classList.remove('hiddenFromView');
    image.classList.add('hiddenFromView');
    anatomy.classList.add('hiddenFromView');
    askQuestion();
})
btnQuestion.addEventListener("click", function () {
    questionToAdd.classList.remove('hiddenFromView');
    brainGame.classList.add('hiddenFromView');
    contentLabel.classList.add('hiddenFromView');
    image.classList.add('hiddenFromView');
    anatomy.classList.add('hiddenFromView');
})
// define elements
let content = $("content"),
    questionContainer = $("question"),
    choicesContainer = $("choices"),
    scoreContainer = $("score"),
    submitBtn = $("submit"),
    choices,
    // init lets
    score = 0,
    askingQuestion = true,
    name,
    answer,
    // duplicate question bank
    duplicateQuestion = [...questionBank];
function $(id) { // shortcut for document.getElementById
    return document.getElementById(id);
}
function askQuestion() {
    questionToAdd = document.getElementById('questionToAdd').classList.add('hiddenFromView');
    section.classList.remove('hiddenFromView');
    contentLabel.classList.remove('hiddenFromView');
    brainGame.classList.remove('hiddenFromView');
    brain.classList.remove('hiddenFromView');
    // splicing the duplicateQuestion worked so when I added the user question I could do it
    choicesContainer.innerHTML = "";
    // loop through choices, and create radio buttons
    name = duplicateQuestion.splice(Math.floor(Math.random() * duplicateQuestion.length), 1)[0] //[{}][0];
    choices = name.choices;

    for (let i = 0; i < choices.length; i++) {
        choicesContainer.innerHTML += `<input data-correct='${name.Correct}' data-i='${i}' type='radio' name='quiz' class='choices' ${demo ? name.Correct === choices[i] ? 'checked' : null : null} ` + choices[i] + "' class='choice" + (i + 1) + "'value='" + choices[i] + "'>" + " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
        let inputs = document.getElementsByTagName('input');
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].addEventListener('change', answerGuy);
        }
    }
    // load the question
    questionContainer.textContent = `Current Question: ${name.question}`;
    // setup for the first time
    scoreContainer.textContent = `Score: ${score} right answers out of ${questionBank.length}   possible.`;
}
function answerGuy(e) {
    e.preventDefault();
    let p = document.createElement('p');
    let div = document.createElement('div');
    let getDiv = document.getElementById('choices');
    // this === e.target;
    let currentSpot = this.dataset.i;
    let correctAnswer = this.dataset.correct;
    if (currentSpot === correctAnswer) {
        // changes to warning when the correct answer is selected
        this.nextElementSibling.classList.add('text-info');
        div.className = 'justify-content-center text-info paragraph';
        p.innerText = 'You Are Correct';
        getDiv.appendChild(div);
        div.appendChild(p);
        document.getElementsByName('quiz').forEach((radio) => { radio.setAttribute("disabled", "disabled"); });
        score++;
        // helps the picture grow
        document.querySelector('.brain-container').style.width = `${12 * score}%`;
    } else {
        // change it to danger when wrong
        this.nextElementSibling.classList.add('text-warning');
        div.className = 'justify-content-center text-warning';
        p.innerText = `The correct answer is option ${name.Correct + 1}`;
        getDiv.appendChild(div);
        div.appendChild(p);
        document.getElementsByName('quiz').forEach((radio) => { radio.setAttribute("disabled", "disabled"); });
    }
}
function subAnswer(e) {
    // adds to the score at the bottom of the quiz
    e.preventDefault();
    scoreContainer.textContent = "" + score + " correct out of " + questionBank.length + "";
    if (duplicateQuestion.length > 0) {
        askQuestion();
    } else {
        showFinalResults();
    }
}
// The final score
function showFinalResults() {
    let percent = Math.round((score / questionBank.length) * 100);
    content.innerHTML = `<h2>Congrats! You've completed the quiz!</h2> 
    <h2>Below are your results:</h2> 
    <h2>  ${score}  out of  ${questionBank.length} questions,  ${percent} 
    %<h2>
    <a class="ui inverted button form-control text-center m-2 w-25" href="./index.html">Return Home</a>
    ` + `<div><h1> Thank You for Playing!!</h1></div>`;
    if (percent < 75) {
        content.innerHTML = `<h2>You have completed the quiz! Please consider studying more</h2> 
        <h2>Below are your results:</h2> 
        <h2>  ${score}  out of  ${questionBank.length} questions,  ${percent} 
        %<h2>
        <a class="ui inverted button form-control text-center m-2 w-25" href="https://wikipedia.tlm.cloud/wikipedia_en_computer_2017-04/A/Hippocampus.html">Study of the Brain</a>`
            + `<div><h1> Thank You for Playing!!</h1></div>`;
    }
};
