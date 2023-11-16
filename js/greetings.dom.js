const nameReference = document.querySelector('.nameString');
const greetBtnRef = document.querySelector('.greetMeBtn');
const greet = document.querySelector('#greet');
const countOfGreet = document.querySelector('#counter');
const resetBtn = document.querySelector('.resetBtn');
const errorMessage = document.querySelector('#errorMsg');

let users;

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
};

// App instance
const greetApp = greetingsApp(users);

countOfGreet.innerHTML = greetApp.getCount();

// Events

greetBtnRef.addEventListener('click', function() {
    const radioReferenceBtn = document.querySelector('input[name="lang"]:checked');

    if (nameReference.value) {
    
        if (radioReferenceBtn.value == "IsiXhosa") {
            const greeting = {
                username: nameReference.value.toLowerCase(),
                greet: "Molo" 
            };
            const getGreeting = greetApp.greetUser(greeting);
    
            if (getGreeting) {
                greet.innerHTML = getGreeting;
    
            } else if (getGreeting == false) {
                errorMessage.innerHTML = `${greeting.username} has already been greeted.`;
                errorMessage.classList.add("danger");
    
            } else {
                errorMessage.innerHTML = "Enter alphabets only."
                errorMessage.classList.add("danger");
            };
    
        } else if (radioReferenceBtn.value == "English") {
            const greeting = {
                username: nameReference.value.toLowerCase(),
                greet: "Hello" 
            };
            const getGreeting = greetApp.greetUser(greeting);
    
            if (getGreeting) {
                greet.innerHTML = getGreeting;
    
            } else if (getGreeting == false) {
                errorMessage.innerHTML = `${greeting.username} has already been greeted.`;
                errorMessage.classList.add("danger");

            } else {
                errorMessage.innerHTML = "Enter alphabets only.";
                errorMessage.classList.add("danger");
            };
    
        } else {
            const greeting = {
                username: nameReference.value.toLowerCase(),
                greet: "Dumela" 
            };
            const getGreeting = greetApp.greetUser(greeting);
    
            if (getGreeting) {
                greet.innerHTML = getGreeting;
    
            } else if (getGreeting == false) {
                errorMessage.innerHTML = `${greeting.username} has already been greeted.`;
                errorMessage.classList.add("danger");
    
            } else {
                errorMessage.innerHTML = "Enter alphabets only.";
                errorMessage.classList.add("danger");
            };
        };
    
        countOfGreet.innerHTML = greetApp.getCount();
        localStorage.setItem("users", JSON.stringify(greetApp.getUsers()));

    } else {
        errorMessage.innerHTML = "Enter your name.";
        errorMessage.classList.add("danger");
    };

    nameReference.value = "";
    
    setTimeout(() => {
        errorMessage.innerHTML = "";
    }, 3000);

});

resetBtn.addEventListener('click', function() {
    if (confirm("Press Ok to clear data Or Cancel to abort.")) {
        localStorage.clear();
        location.reload();
    };
});