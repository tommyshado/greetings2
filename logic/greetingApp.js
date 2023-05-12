function greetingsApp(countResult) {
    let counter = countResult || 0;
    let userName = {};
    let currentName = '';
    // update user name
    function updateUser(name) {
        let lowCaseName = name.toLowerCase();
        if (userName[lowCaseName] !== undefined) {
            userName[lowCaseName] += 1;
            currentName = lowCaseName;
        } else {
            userName[name] = 1;
            counter += 1;
        }
    }
    // greet user in three languages
    function greetUserName(user, lang) {
        let pattern = /^[a-zA-Z0-9]+$/;
        if (!user.trim().match(pattern)) {
            userName[user] = 0;
            return 'Please enter valid name';
        }

        let lowerCaseName = user.toLowerCase();
        if (lowerCaseName && lang === 'IsiXhosa') {
            return`Molo ${lowerCaseName}.`;
        } 
        if (lowerCaseName && lang === 'SiSotho') {
            return `Dumela ${lowerCaseName}.`;
        }
        if (lowerCaseName && lang === 'English') {
            return `Hello ${lowerCaseName}.`;
        }
        return '';
    }
    
    function errorMessages(user, lang) {
        if (user === '' && lang === null) {
            return  'Please enter name and select language.';
        } 
        if (user === '') {
            return 'Please enter name.';
        }
        if (lang === null) {
            return  'Please select a language.';
        }
        return '';
    }
    
    function greetedNames() {
        if (userName[currentName] >= 2) {
            return `${currentName} has already been greeted.`;
        }
        return '';
    }

    function greetingsCount() {
        return counter;
    }

    function reset() {
        counter = 0;
        return counter;
    }

    function nameOfUser() {
        return userName;
    }

    return {
        greetUserName,
        updateUser,
        errorMessages,
        greetingsCount,
        reset,
        nameOfUser,
        greetedNames
    }
}