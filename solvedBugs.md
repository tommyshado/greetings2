Bug 1:
* in the user interface, when I used the refresh button to refresh the page three or more times
* and then when I greeted name again using the greet button the counter variable started counting from zero instead of starting
* from the current number
    * solve the way that I solved this problem is that I also stored the value in the local storage in my factory function
    * by creating a counterResult variable and initialized it to zero and then stored the counter results from the local storage

Bug 2:
* I was having an error when my error messages was not showing to the screen after the second time when I pressed the say hello button
    * to solve this bug, in my dom code I added display block for my error messages to appear again