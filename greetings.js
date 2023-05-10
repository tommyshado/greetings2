const nameReference = document.querySelector('.nameString');
const greetBtnRef = document.querySelector('.greetMeBtn');
const greet = document.querySelector('#greet');
const countOfGreet = document.querySelector('#counter');
const resetBtn = document.querySelector('.resetBtn');
const errorMessage = document.querySelector('#errorMsg');
var countResult = 0;

const greetApp = greetingsApp(countResult);

if (localStorage['counter']) {
    countResult = Number(localStorage['counter']);
    countOfGreet.innerHTML = countResult;
}

greetBtnRef.addEventListener('click', function() {
    const radioReferenceBtn = document.querySelector('.language:checked');

    if (radioReferenceBtn && nameReference.value !== '') {
        greet.innerHTML = greetApp.greetUserName(nameReference.value, radioReferenceBtn.value);
        greet.classList.add('display');
        greetApp.updateUser(nameReference.value);
        countOfGreet.innerHTML = greetApp.greetingsCount();
    }

    errorMessage.innerHTML = greetApp.errorMessages(nameReference.value, radioReferenceBtn);
    errorMessage.classList.add('danger');
    localStorage['counter'] = greetApp.greetingsCount();
    localStorage.setItem('greetedNames', JSON.stringify(greetApp.nameOfUser()));

    setTimeout(function() {
        errorMessage.style.display = 'none';
    }, 3000);

    nameReference.value = '';
});

resetBtn.addEventListener('click', function() {
    countOfGreet.innerHTML = greetApp.reset();
    greet.innerHTML = '';
    greet.classList.remove('display');
    errorMessage.innerHTML = '';
    localStorage.clear();
    location.reload();
});