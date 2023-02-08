// Bank of Questions that are empty
let questionBank = [];
// The actual questions
function Quiz(question, choices, correct) {
    this.question = question;
    this.choices = choices;
    this.Correct = correct;
}

// this refers to the new instanceof
let quest1 = new Quiz("What shape is the Hippocampus look like", ["A Seashell", "A Quarter", "An Eyeball", "A Seahorse"], 3);
let quest2 = new Quiz("Where is the Cerebellum located", ["At Rear of the Brain", "Behind the eyes", "In the Frontal Lobe ", "In the Temporal Lobe"], 0);
let quest3 = new Quiz("What is the Amygdala associated with?", ["Muscle Memory", "Impairments", "Emotional learning and Memory", "Nothing"], 2);
let quest4 = new Quiz("What are the basic functions of the Basal Ganglia?", ["Cognition", "Motor Control", "Learning", "All of the Above"], 2);
let quest5 = new Quiz("How many Cortical Structures of the brain are there?", ["5", "7", "4", "8"], 2);
let quest6 = new Quiz("The Frontal lobe helps us do what?", ["Coordinate Information", "Interpet how We See things", "Make Movements", "Remember where I put my car"], 0);
let quest7 = new Quiz("Temporal lobe when damaged can affect what?", ["Auditory sensation and preception", "Disturbance of selective attention", "Disorders", "All of Them"], 3);
let quest8 = new Quiz("Parietal Lobe has many functions and duties in the brain but the main 2 are what?", ["Sensation and perception", "Constructing a psatial coordinate system to represent the world around us", "Both A and B", "None"], 2);
let quest9 = new Quiz("The Occipital Lope is located where at in the brain?", ["Toward the front of the brain", "At the base of the brain", "On the left side of the brain", "On the right side of the brain"], 1);
let quest10 = new Quiz("People with Parkinson's display impairments during what?", ["Sequence tasks", "Time events", "How to use their Memory", "All of the Above"], 3);
// add user question into the constructor function
function addQuestion(e) {
    e.preventDefault();
    let question = document.getElementById("userQuestion").value;
    let choices = document.getElementById("choice").value.split(', ');
    let correct = document.getElementById("answer").value;
    let newQuest = new Quiz(question, choices, correct);
    // console.log(question);
    // console.log(choices);
    // console.log(correct);
    questionBank.push(newQuest);
    console.log(questionBank);
    duplicateQuestion.push(newQuest);
    askQuestion();
}
// push into the empyt questionBank array
questionBank.push(quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10);




   


