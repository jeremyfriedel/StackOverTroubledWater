# Production Readme


Project description
+ Single Page Stack Overflow clone built with a rails API backend and React and Redux Frontend.
+ Redux and React single page app which allows dynamical DOM changes without reloading the page or any of the unchanged components of the page.
+ Uses efficient SQL queries to transfer information efficiently from backend to frontend using a custom JSON API minimizing Rails backend load.
+ Ensures user privacy through frontend and backend authentication measures and React Router, allowing users to only post and make changes to their own posts, comments, and answers when logged in.
+ Allows answers to questions to include code formatting, images, links, and other user formatting with a editor integrated into the site.

+ Stack Over Troubled Water is a clone of the popular website Stack Overflow. 
+ Stack Overflow is a question and answer website, and so is Stack Over Troubled Water! 
+ Signup, login or use the handy Demo User button! 
+ Hop in and start asking and answering the latest and greatest in Q&A cyberspace has to offer! 
+ Ask questions, get answers, become a better coder or even ask what the meaning of life is! 
+ There's no limit to the depth of human knowlege now that people can ask and answer each other's deepest and most important questions, propelling us into the future of web development!

### Technologies  Used

+ Ruby
+ Rails
+ React
+ Redux
+ PostgreSQL 
+ JSON
+ AJAX

Rails is used as the backend and as an API, everything esle is React and Redux. This website is a single page app, so no loading times! Content is loaded onto the page as soon at is posted! Data is loaded from the backend as a AJAX request to the Rails API views, which returns a JSON object with the relevant information.

### Getting started!

If you want to host this website, It is very simple, simply npm install (which automatically builds the production webpack), start the rails server with postgres running, and your good to go!  

For a live version go to [here](https://stack-over-troubled-water.herokuapp.com/)

![screenshot](/stackscreenshot2.png)

