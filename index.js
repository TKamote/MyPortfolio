console.log("dave")

const submit = document.getElementById('submit');

const creatElement = document.createElement('p');
const createText = document.createTextNode('Buang si nono');
creatElement.appendChild(createText);
const getElement = document.querySelector('.social-media');



submit.addEventListener('click', () => {
    getElement.appendChild(creatElement);
})

