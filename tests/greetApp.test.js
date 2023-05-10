describe("The 'greetingsApp' factory function", function() {
    describe('handles uppercase', function() {
        it('should be able to greet a user when they enter name and checks a button', function() {
            let greet = greetingsApp();
            
            assert.equal(greet.greetUserName('Tom', "IsiXhosa"), 'Molo tom.');
        });
        it('should be able to greet a user when they enter name and checks a button', function() {
            let greet = greetingsApp();
            
            assert.equal(greet.greetUserName('MthunZi', "English"), 'Hello mthunzi.');
        });
        it('should be able to greet a user when they enter name and checks a button', function() {
            let greet = greetingsApp();
            
            assert.equal(greet.greetUserName('MtHuNzi', "SiSotho"), 'Dumela mthunzi.');
        });
    });

    describe('error messages', function() {
        it('should be able to tell a user to enter name', function() {
            let greet = greetingsApp();

            assert.equal(greet.errorMessages('', 'IsiXhosa'), 'Please enter name.');
        });

        it('should be able to tell a user to enter name and select a language', function() {
            let greet = greetingsApp();

            assert.equal(greet.errorMessages('', null), 'Please enter name and select language.');
        });

        it('should be able to tell a user to select a language', function() {
            let greet = greetingsApp();

            assert.equal(greet.errorMessages('Mthunzi', null), 'Please select a language.');
        });
    });

    describe('greets a name once', function() {
        it('should be able to greet a user name once', function() {
            let greet = greetingsApp();
                greet.updateUser('tom');
                greet.updateUser('tom');

            assert.equal(greet.greetedNames(), "tom has already been greeted.")
        });
        it('should be able to greet a user name once', function() {
            let greet = greetingsApp();
                greet.updateUser('kat');
                greet.updateUser('kat');

            assert.equal(greet.greetedNames(), "kat has already been greeted.")
        });
        it('should be able to greet a user name once', function() {
            let greet = greetingsApp();
                greet.updateUser('malebo');
                greet.updateUser('malebo');

            assert.equal(greet.greetedNames(), "malebo has already been greeted.")
        });
    });
})