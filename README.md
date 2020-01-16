## Abibas

[View Live Site Here](https://abibas.netlify.com/)
<implement screen shot here>

## About
Abibas is an e-commerce application where you can purchase sporting goods based the popular Adidas. I choose do E-commerce because the application allows for a shopping experience by offer wider variety of options so that the user. I built Abibas through a 2 week sprint in which I used used Ruby on Rails for the backend, and React, Redux for the frontend. I partitioned it through 6 phrases which includes, designing the schema, implementing user authentication, extracting and displaying inventory information from a known company, handling transactions, and creating filtering and searching functions.
<put more screen shots here>
## Technologies

* Frontend: React, Redux
* Backend: Ruby on Rails, PostgreSQL
* Inventory Data: Addidas API from APIdojo (APIdojo.net)

## Features

### User Authentication
User Authentication is implemented using JWT auth and Bcrypt gem. Using rails validations, it will automatically contain error information in which I then display it. Utilizing local storage tokens.

<load user auth picture>

### Inventory Information
I used a live real-time Adidas API from API Dojo, through RapidAPI.com to retrieve adidas inventory information. Due to the limited scale of my project, I selected only some of the attributes that I want to use to build a basic minimal viable product of an E-commerce website. Because I can only make a limited amount of calls within the API, I retrieved the information via the backend and stored it within Postgres and upload it within Heroku.

<LOAD SCREEN SHOT HERE>

### Handling Transactions
Due to the limited scale of my project, upon registration there will be a cart dediciated to that user so that information will be saved and 





Prerequisites
What things you need to install the software and how to install them

Give examples
Installing
A step by step series of examples that tell you how to get a development env running

Say what the step will be

Give the example
And repeat

until finished
End with an example of getting some data out of the system or using it for a little demo

Running the tests
Explain how to run the automated tests for this system

Break down into end to end tests
Explain what these tests test and why

Give an example
And coding style tests
Explain what these tests test and why

Give an example
Deployment
Add additional notes about how to deploy this on a live system

Built With
Rails
React
Redux
Vanilla CSS



Authors
Brian Wong

License


Acknowledgments
Thank you to the Instructors and Coaches who helped me along the way to completing this project