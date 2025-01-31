// Wähle 10 zufällige Fragen aus
const quizData = allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);

let currentQuestion = 0;
let score = 0;

// Quiz-Fragen dynamisch einfügen
const quizQuestions = document.getElementById('quiz-questions');
const progressBar = document.querySelector('.progress-bar');
const resultsSection = document.getElementById('results');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');

quizData.forEach((question, index) => {
    const questionCard = document.createElement('div');
    questionCard.classList.add('question-card', 'card', 'mb-4', 'shadow-sm');
    if (index === 0) questionCard.classList.add('active');

    questionCard.innerHTML = `
        <div class="card-body">
            <h3 class="h4 mb-4">Frage ${index + 1}: ${question.question}</h3>
            <div class="options">
                ${question.options.map(option => `
                    <button class="btn btn-outline-primary d-block w-100 mb-3 option-btn">${option}</button>
                `).join('')}
            </div>
        </div>
    `;
    quizQuestions.appendChild(questionCard);
});

// Event-Listener für Antworten
quizQuestions.addEventListener('click', (e) => {
    if (e.target.classList.contains('option-btn')) {
        const selectedAnswer = e.target.textContent;
        const correctAnswer = quizData[currentQuestion].answer;

        if (selectedAnswer === correctAnswer) {
            score++;
        }

        currentQuestion++;
        updateProgress();

        if (currentQuestion < quizData.length) {
            showNextQuestion();
        } else {
            showResults();
        }
    }
});

// Nächste Frage anzeigen
function showNextQuestion() {
    const questionCards = document.querySelectorAll('.question-card');
    questionCards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentQuestion) card.classList.add('active');
    });
}

// Fortschritt aktualisieren
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Ergebnisse anzeigen
function showResults() {
    quizQuestions.style.display = 'none';
    resultsSection.style.display = 'block';
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = quizData.length;
}

// Quiz neu starten
document.getElementById('restart-quiz').addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    quizQuestions.style.display = 'block';
    resultsSection.style.display = 'none';
    updateProgress();
    showNextQuestion();
});