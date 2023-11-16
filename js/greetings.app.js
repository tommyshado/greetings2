function greetingsApp(users__) {

    let users = users__ || {};

    const greetUser = (greeting) => {
        const pattern = /^[a-zA-Z]+$/;

        if (greeting.username.trim().match(pattern)) {
            if (!users[greeting.username]) {
                users[greeting.username] = 1;
                return `${greeting.greet} ${greeting.username}`;

            } else {
                // Case where name has already been greeted
                users[greeting.username]++;
                return false;
            };

        } else {
            // Case where name is not alphabets
            return null;
        };
    };

    const getCount = () => {
        const allUsers = Object.values(users);
        return allUsers.length;
    };

    const getUsers = () => {
        return users;
    };

    return {
        greetUser,
        getCount,
        getUsers
    };
};