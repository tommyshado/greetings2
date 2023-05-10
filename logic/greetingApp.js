function greetingsApp(countResult) {
    let counter = countResult || 0;
    let userName = {};
    let msg = '';
    let currentName = '';
    // update user name
    function updateUser(name) {
        if (userName[name] !== undefined) {
            userName[name] += 1;
            currentName = name;
        } else {
            userName[name] = 1;
            counter += 1;
        }
    }

    function greetedNames() {
        msg = '';
        if (userName[currentName] >= 2) {
            msg = `${currentName} has already been greeted.`;
            return msg;
        }
    }
    // greet user in three languages
    function greetUserName(user, lang) {
        let lowerCaseName = user.toLowerCase();
        if (lowerCaseName && lang === 'IsiXhosa') {
            msg = `Molo ${lowerCaseName}.`;
            return msg;
        } 
        if (lowerCaseName && lang === 'SiSotho') {
            msg = `Dumela ${lowerCaseName}.`;
            return msg;
        }
        if (lowerCaseName && lang === 'English') {
            msg = `Hello ${lowerCaseName}.`;
            return msg;
        }
    }
    
    function errorMessages(user, lang) {
        msg = '';
        if (user === '' && lang === null) {
            msg = 'Please enter name and select language.';
            return msg;
        } 
        if (user === '') {
            msg = 'Please enter name.';
            return msg;
        }
        if (lang === null) {
            msg = 'Please select a language.';
            return msg;
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