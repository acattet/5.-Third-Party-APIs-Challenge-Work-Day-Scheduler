# Third-Party APIs Challenge: Work Day Scheduler

The challenge was to make a work day planner using jquery, bootsrtap and moment.  

## Description

With the CSS and most of the HTML writter, this challenge was fairly straight forward. to start I had to examine the existing code and see what was missing. Time blocks were obviously missing and had to be added. Using bootstrap I was able to section off each individual DIV to look like the example picture. Afterwards I examined the CSS to find the classes already provided to me, as well as finding the icon for the save button. I then assigned an ID for each individual DIV so the local stroage could keep track of each tab. Javascript was next. I first added the code to display moment with the current date, as well as keeping track of the current time for the CSS to display the appropriate colors. To do so I added a loop of If Else statments to adjust colors accordingly. Next was adding function to the button with an event listener and savign it to the local storage. Finally I set up the local storage for each ID to save each textarea locally. With linking the CSS and Javascript and debugging, the code was finished. 

## Authors


  
Anthony Cattet


## Acknowledgments

Inspiration, code snippets, etc.
* https://github.com/coding-boot-camp/urban-octo-telegram/blob/main/Develop/index.html
* https://github.com/coding-boot-camp/urban-octo-telegram/blob/main/Develop/assets/css/style.css