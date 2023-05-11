const nameReference = document.querySelector('.nameString');
const greetBtnRef = document.querySelector('.greetMeBtn');
const greet = document.querySelector('#greet');
const countOfGreet = document.querySelector('#counter');
const resetBtn = document.querySelector('.resetBtn');
const errorMessage = document.querySelector('#errorMsg');
var countResult = 0;

const greetApp = greetingsApp(countResult);

if (localStorage['counter']) {
    countResult = JSON.parse(localStorage['counter']);
    countOfGreet.innerHTML = countResult;
}

greetBtnRef.addEventListener('click', function() {
    const radioReferenceBtn = document.querySelector('input[name="lang"]:checked');
    const name = nameReference.value; 

    if (radioReferenceBtn && name !== '') {
        greet.innerHTML = greetApp.greetUserName(name, radioReferenceBtn.value);
        greet.classList.add('display');
        nameReference.value = '';
        greetApp.updateUser(name);
        if (errorMessage.innerHTML = greetApp.greetedNames()) {
            errorMessage.classList.add('danger');
            greet.innerHTML = '';
            greet.classList.remove('display');
        }
        countOfGreet.innerHTML = greetApp.greetingsCount();
    } else {
        // error messages
        errorMessage.innerHTML = greetApp.errorMessages(name, radioReferenceBtn); 
        errorMessage.classList.add('danger');
    
        setTimeout(function() {
            errorMessage.style.display = 'none';
        }, 3000);
    }
    // local storage
    localStorage.setItem('counter', greetApp.greetingsCount());
    localStorage.setItem('greetedNames', JSON.stringify(greetApp.nameOfUser()));
});

resetBtn.addEventListener('click', function() {
    countOfGreet.innerHTML = greetApp.reset();
    greet.innerHTML = '';
    greet.classList.remove('display');
    errorMessage.innerHTML = '';
    // // local storage
    localStorage.clear();
    location.reload();
});