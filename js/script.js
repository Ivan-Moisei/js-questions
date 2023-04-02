const iterateQuestions = el => console.log(el);
questions.forEach(iterateQuestions);

function showStatus(el) {
    if (el.status == true) {
       return `<span class="icon has-text-success"><i class="fas fa-check-square"></i></span><span>Got it</a></span>`;
    } else {
        return `<span class="icon has-text-danger"><i class="fas fa-ban"></i></span><span>Didn't get it</a></span>`;
    }
};

function showColor(el) {
    if (el.status == true) {
        return `<div class="column card mb-5 is-4 has-background-success-light is-flex is-flex-direction-column">`;
     } else {
         return `<div class="column card mb-5 is-4 has-background-danger-light is-flex is-flex-direction-column">`;
     }
};

function lastQuestionIndex(questions) {
    return questions.indexOf(questions[questions.length - 1]) + 1;
};

function addQuestion() {
    const textArea = document.getElementById('textarea');
    questions.push({question: textArea.value, status: false});
    document.getElementById('cards').insertAdjacentHTML('beforeend',
    `<div class="column card mb-5 is-4 has-background-danger-light is-flex is-flex-direction-column">
    <div class="card-content">
    <p class="title is-5 has-text-centered" id="first">
       ${(lastQuestionIndex(questions))}. ${textArea.value}
    </p>
    </div>
    <footer class="card-footer mt-auto">
    <p class="card-footer-item">
    <span class="icon has-text-danger"><i class="fas fa-ban"></i></span><span>Didn't get it</a></span>
    </p>
    </footer>
    </div>`
    )
};

function showAllQuestions() {
    document.getElementById('cards').innerHTML = '';
    questions.forEach((el, i) => {document.getElementById('cards').insertAdjacentHTML('beforeend',
    `${showColor(el)}
    <div class="card-content">
    <p class="title is-5 has-text-centered" id="first">
        ${i + 1}. ${el.question}
    </p>
    </div>
    <footer class="card-footer mt-auto">
    <p class="card-footer-item">
        ${showStatus(el)}
    </p>
    </footer>
    </div>`
    )
    });
};

function showKnownQuestions() {
    const knownQuestions = questions.filter(questions => questions.status == true);
    document.getElementById('cards').innerHTML = '';
    knownQuestions.forEach((el, i) => {document.getElementById('cards').insertAdjacentHTML('beforeend',
    `${showColor(el)}
    <div class="card-content">
    <p class="title is-5 has-text-centered" id="first">
        ${i + 1}. ${el.question}
    </p>
    </div>
    <footer class="card-footer mt-auto">
    <p class="card-footer-item">
        ${showStatus(el)}
    </p>
    </footer>
    </div>`
    )
    });
};

function showNotKnownQuestions() {
    const notKnownQuestions = questions.filter(questions => questions.status == false);
    document.getElementById('cards').innerHTML = '';
    notKnownQuestions.forEach((el, i) => {document.getElementById('cards').insertAdjacentHTML('beforeend',
    `${showColor(el)}
    <div class="card-content">
    <p class="title is-5 has-text-centered" id="first">
        ${i + 1}. ${el.question}
    </p>
    </div>
    <footer class="card-footer mt-auto">
    <p class="card-footer-item">
        ${showStatus(el)}
    </p>
    </footer>
    </div>`
    )
    });
};

function showQuestions() {
    const checkbox1 = document.getElementById('known-questions');
    const checkbox2 = document.getElementById('not-known-questions');
    if (checkbox1.checked == true && checkbox2.checked == true) {
        showAllQuestions();
    } else if (checkbox1.checked == true) {
            showKnownQuestions();
    } else if (checkbox2.checked == true) {
        showNotKnownQuestions();
    } else {
        showAllQuestions();
    };
};

showAllQuestions();