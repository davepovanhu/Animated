// Quiz data: 30 multiple-choice questions and 20 true/false questions
const questions = {
    multipleChoice: [
        { question: "What is the main purpose of an inertia pendulum simulation?", options: ["To measure the speed of light", "To demonstrate the principles of inertia and oscillation", "To calculate the gravitational force", "To analyze fluid dynamics"], answer: "To demonstrate the principles of inertia and oscillation" },
        { question: "What force primarily acts on a pendulum when it is swinging?", options: ["Tension", "Friction", "Gravity", "Air resistance"], answer: "Gravity" },
        { question: "In a pendulum, the point of suspension is known as the:", options: ["Bob", "Arm", "Pivot", "Mass"], answer: "Pivot" },
        { question: "Which of the following factors does NOT affect the period of a simple pendulum?", options: ["Length of the pendulum", "Mass of the pendulum bob", "Acceleration due to gravity", "Amplitude of the swing"], answer: "Mass of the pendulum bob" },
        { question: "What happens to the period of a pendulum as the length increases?", options: ["It decreases", "It increases", "It remains the same", "It becomes unpredictable"], answer: "It increases" },
        { question: "In an ideal pendulum, what is the relationship between the amplitude and period?", options: ["They are directly proportional", "They are inversely proportional", "They are independent of each other", "Amplitude affects the period only at small angles"], answer: "Amplitude affects the period only at small angles" },
        { question: "What is the primary energy conversion happening in a pendulum?", options: ["Mechanical to thermal", "Kinetic to potential", "Gravitational to electrical", "Thermal to kinetic"], answer: "Kinetic to potential" },
        { question: "What type of motion does a pendulum exhibit?", options: ["Circular motion", "Linear motion", "Oscillatory motion", "Uniform motion"], answer: "Oscillatory motion" },
        { question: "Which simulation parameter would you adjust to study the effect of air resistance?", options: ["Gravity", "Damping factor", "Length of the pendulum", "Mass of the bob"], answer: "Damping factor" },
        { question: "In an inertia pendulum simulation, increasing the mass of the bob affects:", options: ["The amplitude of swing", "The period of swing", "The energy conversion rate", "The tension in the string"], answer: "The tension in the string" },
        { question: "Where is the pendulum's kinetic energy maximum?", options: ["At the highest point", "At the lowest point", "At the midpoint of its swing", "Energy remains constant"], answer: "At the lowest point" },
        { question: "What happens to the frequency of a pendulum as its amplitude increases?", options: ["It decreases", "It increases", "It remains constant", "It becomes unpredictable"], answer: "It remains constant" },
        { question: "What is the time taken for one complete cycle of a pendulum called?", options: ["Amplitude", "Period", "Frequency", "Speed"], answer: "Period" },
        { question: "A pendulum bob reaches its maximum height when:", options: ["It has maximum kinetic energy", "It has maximum potential energy", "It has maximum velocity", "It has maximum acceleration"], answer: "It has maximum potential energy" },
        { question: "What happens to the speed of a pendulum as it approaches its lowest point?", options: ["It increases", "It decreases", "It remains the same", "It stops"], answer: "It increases" },
        { question: "If you decrease the length of the pendulum, what happens to its period?", options: ["It increases", "It decreases", "It remains constant", "It becomes random"], answer: "It decreases" },
        { question: "What effect does friction have on a pendulum?", options: ["Increases its amplitude", "Decreases its amplitude over time", "Has no effect", "Increases its period"], answer: "Decreases its amplitude over time" },
        { question: "What is the relationship between the period and the frequency of a pendulum?", options: ["They are directly proportional", "They are inversely proportional", "They are independent", "Frequency affects the period only at large angles"], answer: "They are inversely proportional" },
        { question: "What kind of energy is stored in a pendulum at its highest point?", options: ["Kinetic energy", "Potential energy", "Thermal energy", "Chemical energy"], answer: "Potential energy" },
        { question: "What would happen to the period of a pendulum if you doubled the gravitational acceleration?", options: ["It would double", "It would halve", "It would remain the same", "It would decrease slightly"], answer: "It would halve" },
        { question: "Which of the following correctly describes the damping of a pendulum?", options: ["Energy loss due to air resistance", "Energy gain due to gravity", "Increase in amplitude over time", "Increase in velocity over time"], answer: "Energy loss due to air resistance" },
        { question: "The pendulum returns to the same position after each cycle due to:", options: ["Inertia", "Momentum", "Friction", "Air resistance"], answer: "Inertia" },
        { question: "What does the pendulum's restoring force depend on?", options: ["The weight of the bob", "The length of the string", "The angle of displacement", "The speed of the bob"], answer: "The angle of displacement" },
        { question: "What happens to a pendulum's motion when the damping factor increases?", options: ["It speeds up", "It slows down", "The amplitude increases", "The period becomes shorter"], answer: "It slows down" },
        { question: "At what point does a pendulum have maximum velocity?", options: ["At the top of its swing", "At the bottom of its swing", "At the midpoint", "Velocity is constant"], answer: "At the bottom of its swing" },
        { question: "What variable do you manipulate in a pendulum experiment to measure its period?", options: ["Bob's mass", "Length of the pendulum", "Gravitational constant", "Amplitude of the swing"], answer: "Length of the pendulum" },
        { question: "Which of the following is NOT a type of energy exhibited by a pendulum?", options: ["Kinetic energy", "Potential energy", "Thermal energy", "Elastic energy"], answer: "Elastic energy" },
        { question: "When is the total mechanical energy of the pendulum constant?", options: ["In the absence of friction", "When air resistance is high", "When mass is doubled", "When damping is significant"], answer: "In the absence of friction" },
        { question: "What happens to the pendulum's oscillations as the amplitude increases in large angles?", options: ["It becomes irregular", "It becomes periodic", "It becomes chaotic", "It becomes uniform"], answer: "It becomes irregular" }
    ],
    trueFalse: [
        { question: "A pendulum always swings in a straight line.", answer: "False" },
        { question: "The period of a pendulum is independent of its mass.", answer: "True" },
        { question: "Increasing the length of a pendulum will decrease its period.", answer: "False" },
        { question: "An ideal pendulum does not lose energy to friction.", answer: "True" },
        { question: "The maximum potential energy of a pendulum occurs at its lowest point.", answer: "False" },
        { question: "A pendulum exhibits simple harmonic motion.", answer: "True" },
        { question: "The damping factor simulates the effects of friction.", answer: "True" },
        { question: "A pendulum's amplitude decreases over time due to energy loss.", answer: "True" },
        { question: "The gravitational force acts in the opposite direction to the pendulum's motion.", answer: "False" },
        { question: "The time taken for one complete oscillation is called the period.", answer: "True" },
        { question: "Inertia plays a significant role in a pendulum's motion.", answer: "True" },
        { question: "The amplitude of a pendulum affects its frequency.", answer: "False" },
        { question: "The restoring force of a pendulum is provided by gravity.", answer: "True" },
        { question: "A pendulum can only swing in one direction.", answer: "False" },
        { question: "The motion of a pendulum can be predicted using mathematical equations.", answer: "True" },
        { question: "Increasing air resistance will increase the period of the pendulum.", answer: "True" },
        { question: "All pendulums have the same period regardless of their length.", answer: "False" },
        { question: "A pendulum will always return to its starting height after each swing.", answer: "False" },
        { question: "Pendulum simulations can be used to teach concepts of physics.", answer: "True" },
        { question: "A pendulum reaches its maximum kinetic energy at its highest point.", answer: "False" }
    ]
};

// Function to randomly select 5 multiple-choice and 5 true/false questions
function getRandomQuestions() {
    const selectedQuestions = {
        multipleChoice: [],
        trueFalse: []
    };

    // Randomly select 5 multiple-choice questions
    selectedQuestions.multipleChoice = questions.multipleChoice
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    // Randomly select 5 true/false questions
    selectedQuestions.trueFalse = questions.trueFalse
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    return selectedQuestions;
}

// Function to display questions in HTML form
function displayQuestions() {
    const questionsContainer = document.getElementById('questions-container');
    const selectedQuestions = getRandomQuestions();

    selectedQuestions.multipleChoice.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p>${q.question}</p>
            ${q.options.map(option => `
                <label>
                    <input type="radio" name="question${index}" value="${option}"> ${option}
                </label><br>
            `).join('')}
        `;
        questionsContainer.appendChild(questionDiv);
    });

    selectedQuestions.trueFalse.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p>${q.question}</p>
            <label>
                <input type="radio" name="question${5 + index}" value="True"> True
            </label>
            <label>
                <input type="radio" name="question${5 + index}" value="False"> False
            </label>
        `;
        questionsContainer.appendChild(questionDiv);
    });
}

// Function to handle quiz submission, scoring, and feedback display
function submitQuiz() {
    const formData = new FormData(document.getElementById('quiz-form'));
    const resultContainer = document.getElementById('result');
    const questionsContainer = document.getElementById('questions-container');
    const selectedQuestions = getRandomQuestions();
    let score = 0;

    resultContainer.innerHTML = ''; // Clear the previous results

    // Loop through multiple-choice questions
    selectedQuestions.multipleChoice.forEach((q, index) => {
        const userAnswer = formData.get(`question${index}`);
        const questionDiv = questionsContainer.children[index];
        const isCorrect = userAnswer === q.answer;
        const feedbackText = isCorrect ? 'Correct' : `Wrong. The correct answer is "${q.answer}".`;
        const feedbackColor = isCorrect ? 'green' : 'red';
        const icon = isCorrect ? '✅' : '❌';

        if (isCorrect) score++;

        // Append feedback
        questionDiv.innerHTML += `
            <p style="color: ${feedbackColor};">${icon} ${feedbackText}</p>
        `;

        // Keep user's answer selected
        questionDiv.querySelectorAll('input').forEach(input => {
            input.disabled = true;
            if (input.value === userAnswer) {
                input.checked = true;
            }
        });
    });

    // Loop through true/false questions
    selectedQuestions.trueFalse.forEach((q, index) => {
        const userAnswer = formData.get(`question${5 + index}`);
        const questionDiv = questionsContainer.children[5 + index];
        const isCorrect = userAnswer === q.answer;
        const feedbackText = isCorrect ? 'Correct' : `Wrong. The correct answer is "${q.answer}".`;
        const feedbackColor = isCorrect ? 'green' : 'red';
        const icon = isCorrect ? '✅' : '❌';

        if (isCorrect) score++;

        // Append feedback
        questionDiv.innerHTML += `
            <p style="color: ${feedbackColor};">${icon} ${feedbackText}</p>
        `;

        // Keep user's answer selected
        questionDiv.querySelectorAll('input').forEach(input => {
            input.disabled = true;
            if (input.value === userAnswer) {
                input.checked = true;
            }
        });
    });

    // Display score and feedback
    resultContainer.innerHTML = `
        <h2>Your Score: ${score}/10</h2>
        <p>${score >= 5 ? 'Pass' : 'Fail'}</p>
    `;

    // Disable the submit button
    document.querySelector('button[type="button"]').disabled = true;
}

// Initialize the quiz on page load
document.addEventListener("DOMContentLoaded", displayQuestions);
