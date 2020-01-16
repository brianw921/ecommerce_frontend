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
User Authentication is implemented using JWT auth and Bcrypt gem. Using rails validations, it will automatically contain error information in which I then display it. 

<load user auth picture>

### Inventory Information
I used a live real-time Adidas API from API Dojo, through RapidAPI.com to retrieve adidas inventory information. Due to the limited scale of my project, I selected only some of the attributes that I want to use to build a basic minimal viable product of an E-commerce website. Because I can only make a limited amount of calls within the API, I retrieved the information via the backend and stored it within Postgres and upload it within Heroku.

<LOAD SCREEN SHOT HERE>

### Handling Transactions
Due to the limited scale of my project, I disigned it so that the user must be logged in inorder for them to make a purchase. Upon registration there will be a cart dediciated to that user that will allow them to store products and revisit the website when they want to finalize their order. Once the person makes the purchase, the information will be saved and they can view their past purchases

<LOAD SCREEN SHOT HERE>

### Displaying Product information
Once an item is clicked, a modal will popup and provide options that will allow the user to either add the item to the cart or continue shopping. Whenever there is a product information, upon clicking that item it will always display the item. 


<LOAD SCREEN SHOT HERE>

### Filter and Search Bar
In order to allow for a more convinent user 





Authors
Brian Wong

License


Acknowledgments
Thank you to the Instructors and Coaches who helped me along the way to completing this project