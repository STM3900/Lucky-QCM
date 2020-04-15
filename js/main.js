const Form = document.querySelector('form');

const FormQuestion = document.querySelector('#question');
const FormReponse = document.querySelector('#reponse');
const FormSubmit = document.querySelector('#submit');
const Icon = document.querySelector('i');

let b = document.body;

let questionValue;
let reponseValue;
let section;

let Section;

let bool = false;
let boolCreate = false;

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Icon.addEventListener("click", toggleStyle);

Form.addEventListener("submit", function (e) {

    if ((!isNaN(FormQuestion.value) && !isNaN(FormReponse.value)) && (FormQuestion.value != "" && FormReponse.value != "")) {
        questionValue = FormQuestion.value;
        reponseValue = FormReponse.value;
        if (section) {
            section.innerHTML = '';
        }
        section = createQuestions();
    }
    e.preventDefault();
});


function createQuestions(section) {
    let newSection = section ? section : document.createElement('section');
    for (let i = 0; i < questionValue; i++) {
        let newD = document.createElement('div');

        let newH = document.createElement('h4');
        newH.textContent = `Question ${i+1} :`;

        let newP = document.createElement('p');
        newP.textContent = entierAleatoire(1, reponseValue);

        newD.appendChild(newH);
        newD.appendChild(newP);

        newSection.appendChild(newD);
    }
    Icon.classList.add('i-show');
    b.appendChild(newSection);

    if(!boolCreate){
        Section = document.querySelector('section');
        boolCreate = true;
    }

    return newSection;
}

function toggleStyle(){
    if(!bool){
        Section.classList.add('section-co');
        Icon.classList.replace('fa-list', 'fa-columns');
        bool = true;
    }
    else{
        Section.classList.remove('section-co');
        Icon.classList.replace('fa-columns', 'fa-list');
        bool = false;
    }
}