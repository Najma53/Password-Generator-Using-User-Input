# Password-Generator-Using-User-Input
As a bootcamp student, we are required to build a Password Generaror using user choices. This project involved us to use javaScript to write the code that will prompt the user and in return take that information and build the password generator that will mock the demo [password generator demo](./images/05-javascript-challenge-demo.png) and will be fully functiining.

# Description

THese are the criteria given to us 
* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password
      * At least 10 characters but no more than 64.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
  * Code should validate for each input and at least one character type should be selected
  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

  # Getting Started

  Step 1

I created a new repository on my GitHub account and clone it to my computer using git clone command.

Then I deployed it by using the git add, git commit, and git push commands to save and push my code to my GitHub repository.

I Navigated to my GitHub repository in the browser and then select the Settings tab on the right side of the page.

On the Settings page, scrolled down to the GitHub Pages section. Then, in the section labeled Source, select the main branch as my source.

This led to my webpage viral https://najma53.github.io/Password-Generator-Using-User-Input


Step 2

First you need to pseudocoding. That is understand the problem in the language you are comfortable with i.e for me its English. Then slice the whole problem to bits and start witing the code in your language. Most of the pseudocoding was done for us and whatever wasn't its inside the script.js

Step 3

Start writing the code in script.js file, save it. (Don't forget to console log)
Then open index.html file in browser, use your inspect tools and look in the console. This will show your output if you have console log it or if there is any error in your code.

Step 4

Debugging the code, meaning fixing the errors until no error pops up in the console. Most of my debugging notes are in the script.js by comenting out. This is what I discovered :
* my total character lenght was doubling (if only one user input choice was taken) but if all then it became complex), not matching user input.
* my initial variable to collect user imput was string, was collecting commas in arrays of user input variables as choices hence my total character lenght was increasing. I changed to an array
*   When you console log based on this argument as shown below  
    numbers = numericCharacters;
    lowerCase = lowerCasedCharacters;
    upperCase = upperCasedCharacters;
    symbols = specialCharacters;
such as console.log(numbers); console.log(lowercase);console.log(uppercase);console.log(symbols) the out put was different. I got bolean value  of true and false hence once again I had to go change my code.It was affecting my character length as well.

Below images showing my output  in console when initial out out lenght was chosen as 10. It will not match the script line currently as I have added and removed few lines of codes. This is just an example of what I got. The console didn't flag as red because my output was correct but it was still incorrect because that was affecting user input lenght of password.

Image showing bolean value, hence affecting total character length. [demo](./images/bolean%20value.png)


Image showing character lenght being doubled while user inut lenght is different. [demo](./images/Console.png)


* my initial variable  (i.e total character variable) if initial value of 0 was given, it was counting as 1 in out put hence gave an empty value.
* my password length variable was inside the local scope of getPasswordOption hence outside this fuction when I needed it later (in getPasswordOption) was not being picked up. After moving to global, it was being picked up.
* after fixing the above bugs, still found these ones as demonstrated in bugs.pdf file [demo](./images/bugs.png). To change this needed a new "if statement " just before the password function started.

# Conclusion

It was challenging assignment, writing the concept in English was easy, transfering to code was a bit hard initially. Watched a lot of u tubes and googled a lot. Most of google output was over my head but understood the basic concepts. Then it was trial and error. This project I found was more debugging the initial code I wrote and by doing so learnt few more things. I had fun debugging it, took me 7 days to do it. Its simple for anyone with coding experience but as novice its great, you can learn a lot. One most important thing I have learnt from this is at every step console.log to see your ouput and whenever you are using the variable, console.log them before using them and after, hence wll be faster to find your mistake or see where the chain of code is broken. JUST TOOK ME 7 DAYS TO REALIZE IT. I hope I follow my own advice in next project. My final product resembles the mock and displays the password. [demo](./images/passworddisplayed.png). One of the great advice I got from my better half was, make sure your recipe is correct, if you are cooking ommellete , make sure you get ommellete and not scrambled eggs. Don't start cooking without checking your recipe.