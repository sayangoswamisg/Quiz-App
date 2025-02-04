let answerOptions = document.querySelector('.answer-options');
let nextQuestionBtn = document.querySelector('.next-question-btn');
let questionStatus = document.querySelector('.question-status');
let timerDisplay = document.querySelector('.time-duration');
const resultContainer = document.querySelector('.result-container');
const quizContainer = document.querySelector('.quiz-container');
const configContainer = document.querySelector('.config-container');
let currentQuestion = null;
let timer = null;
const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let quizCategory = 'programming';
let numberOfQuestions = 10;
let questionIndexHistory = [];
let correctAnswerCount = 0;

const resetTimer = () =>{
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`;
}

const startTimer = () =>{
    timer = setInterval(() =>
    {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;
        if(currentTime <= 0){
            clearInterval(timer);
            highlightCorrectAnswer();

            answerOptions.querySelectorAll('.answer-option').forEach(option => option.style.pointerEvents = 'none');
            nextQuestionBtn.style.visibility = 'visible';
            quizContainer.querySelector('.quiz-timer').style.background = '#c31402';

        }
    }, 1000)
}


const getRandomQuestion = () =>{
    const categoryQuestion = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

    const availableQuestion = categoryQuestion.filter((_,index) => !questionIndexHistory.includes(index));

    const randomQuestion = availableQuestion[Math.floor(Math.random() * categoryQuestion.length)];

    questionIndexHistory.push(categoryQuestion.indexOf(randomQuestion));

    if(questionIndexHistory.length > Math.min(categoryQuestion.length, numberOfQuestions))
    {
        return showQuizResult();
    }

    return randomQuestion;
}

const renderQuestion = () =>
{
    currentQuestion = getRandomQuestion();
    if(!currentQuestion)
        return;
    console.log(currentQuestion);

    resetTimer();
    startTimer();
    quizContainer.querySelector('.quiz-timer').style.background = '#32313C';

    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility = 'hidden';
    document.querySelector('.question-text').textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.classList.add('answer-option');
        li.textContent = option;
        answerOptions.appendChild(li);

        li.addEventListener('click', () => handleAnswer(li, index));
    });
}



nextQuestionBtn.addEventListener('click',renderQuestion);


const highlightCorrectAnswer = () =>
{
    const correctOption = answerOptions.querySelectorAll('.answer-option')[currentQuestion.correctAnswer];
    correctOption.classList.add('correct');

    const iconHtml = `<span class="material-symbols-outlined">check_circle </span>`;

    correctOption.insertAdjacentHTML('beforeend', iconHtml);
}

const handleAnswer = (option, answerIndex) =>
{
    clearInterval(timer);
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');

    !isCorrect ? highlightCorrectAnswer() : correctAnswerCount++;

    answerOptions.querySelectorAll('.answer-option').forEach(option => option.style.pointerEvents = 'none');

    const iconHtml = `<span class="material-symbols-outlined">${isCorrect ? 'check_circle' : 'cancel'} </span>`;

    option.insertAdjacentHTML('beforeend', iconHtml);
    nextQuestionBtn.style.visibility = 'visible';

}


const showQuizResult = () =>{
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    let resultText = null;

    if(correctAnswerCount < 0.4*numberOfQuestions)
    {
        resultText = `You answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. Poor Performance!`;
    }
    else if(correctAnswerCount < 0.8*numberOfQuestions)
    {
        resultText = `You answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. Well Done`;
    }
    else
    {
        resultText = `You answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. You are Genius`;
    }

    
    document.querySelector('.result-message').innerHTML = resultText;
}


const resetQuiz = () =>{
    resetTimer();
    correctAnswerCount = 0;
    questionIndexHistory.length = 0;
    configContainer.style.display = 'block';
    resultContainer.style.display = 'none';
}

document.querySelector('.try-again-btn').addEventListener('click', resetQuiz);


const startQuiz = () =>{
    configContainer.style.display = 'none';
    quizContainer.style.display = 'block';

    quizCategory = document.querySelector('.category-option.active').textContent;
    numberOfQuestions = parseInt(document.querySelector('.question-option.active').textContent);

    renderQuestion();
}

document.querySelector('.start-quiz-btn').addEventListener('click', startQuiz);

document.querySelectorAll('.category-option, .question-option').forEach(option =>{
    option.addEventListener('click', ()=>{
        option.parentNode.querySelector('.active').classList.remove('active');
        option.classList.add('active');
    })
})