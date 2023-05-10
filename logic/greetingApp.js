function greetingsApp(countResult) {
    let counter = countResult || 0;
    let userName = {};
    let msg = '';
    // update user name
    function updateUser(name) {
        if (userName[name] !== undefined) {
            userName[name] += 1;
        } else {
            userName[name] = 1;
            counter += 1;
        }
    }
    // greet user in three languages
    function greetUserName(user, lang) {
        if (user && lang === 'IsiXhosa') {
            msg = `Molo ${user}.`;
            return msg;
        } 
        if (user && lang === 'SiSotho') {
            msg = `Dumela ${user}.`;
            return msg;
        }
        if (user && lang === 'English') {
            msg = `Hello ${user}.`;
            return msg;
        }
    }
    
    function errorMessages(user, lang) {
        msg = '';
        if (user === '' && lang === null) {
            msg = 'Please enter name and check language.';
            return msg;
        } 
        if (user === '') {
            msg = 'Please enter name.';
            return msg;
        }
        if (lang === null) {
            msg = 'Please check a language.';
            return msg;
        }
        
        if (userName[user] >= 2) {
            msg = `${user} has already been greeted.`;
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
        nameOfUser
    }
}