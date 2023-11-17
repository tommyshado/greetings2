describe("The 'greetingsApp' factory function", function() {
    let App;

    beforeEach(() => {
        App = greetingsApp();
    });

    it("should be able to get the greeted usernames", () => {
        App.greetUser({
            username: "mthunzi",
            greet: "Molo"
        });
        App.greetUser({
            username: "tom",
            greet: "Hello"
        });
        App.greetUser({
            username: "mthunzi",
            greet: "Dumela"
        });

        assert.deepEqual({
            "mthunzi": 2,
            "tom": 1,
        }, App.getUsers());
    });

    it("should be able to greet a username in Xhosa", () => {
        const greeting = App.greetUser({
            username: "mthunzi",
            greet: "Molo"
        });

        assert.equal("Molo mthunzi", greeting);
    });

    it("should be able to greet a username in English", () => {
        const greeting = App.greetUser({
            username: "Katlego",
            greet: "Hello"
        });

        assert.equal("Hello Katlego", greeting);
    });

    it("should not be able to greet a greeted username", () => {
        const greeting = App.greetUser({
            username: "bjorn",
            greet: "Dumela"
        });

        assert.equal("Dumela bjorn", greeting);

        const greeting__ = App.greetUser({
            username: "bjorn",
            greet: "Molo"
        });

        assert.equal(false, greeting__);
    });
    
    it("should be able to get the count of greeted usernames", () => {
        App.greetUser({
            username: "Katlego",
            greet: "Hello"
        });
        App.greetUser({
            username: "bjorn",
            greet: "Dumela"
        });
        App.greetUser({
            username: "Katlego",
            greet: "Dumela"
        });
        App.greetUser({
            username: "bjorn",
            greet: "Molo"
        });

        assert.equal(2, App.getCount());
    });
})