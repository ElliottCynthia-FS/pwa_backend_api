# Programming for Web Applications

*WDV-3322* 

**Cynthia Elliott**

**NOTE**: *Everything in this README is taken from the course modules of PWA (Programming of Web Applications WDV-3322 of Full Sail University) directly to explain and give further detail of the repository and the branches included.*

---

## Course Overview

- **Week one** - *In week one we will write a backend API that has exactly one endpoint. The endpoint will take a single POST request that includes all the details of a user (name, email, phone, birthdate, password, and zip code).* 
- **Week Two** - *In week one we will learn how to create our own custom NodeJS package/library. We will also learn the ins-and-outs of modular NodeJS code & package management using NPM. In week 1 we will create a module that includes methods to validate user details such as email, phone number, date of birth, password, and zip code.*
- **Week Three** - *In week three we will write a few code tests that test our API to ensure the correct responses are being sent with a few example bad & good requests.*
- **Week Four** - *In week four we will work on documenting our newly create backend API by using Swagger docs.*

### Overall Requirements

- Create a NodeJS Express application
- Create a RESTful API endpoint
- Create a Swagger UI documentation file
- Create a Jest unit test file
- Create a NPM package for the API endpoint
- Create a NPM package for the Swagger UI documentation file
- Create a NPM package for the Jest unit test file
- Install the NPM packages
- Run the Express application
- Run the Jest unit tests

*(**NOTE**: The "main" branch will be kept up-to-date with everything, so this is a breakdown of the process of the coursework)*

## Backend-API Creation / Start-Up *(Week-1 Progress)*

---

### Assignment *(Week-1)*

*(Taken directly from the course Module)*

- Using Express middlewares to validate user input
- Exposure to basic regular expressions (RegEx) for validation purposes
- How to modularize your code by making your own NPM packages/libraries
- How to write code/unit tests for NodeJS/Express applications using Jest (Javascript testing framework)
- Write effective backend API documentation using Swagger UI

### The four fields

- **email** - *Email address of the user attempting to signup*
- **phone** - *Phone number of the user attempting to signup*
- **birthday** - *Birthdate of the user attempting to signup*
- **password** - *Password of the user attempting to signup*

### Extra Information

- There is no requirement for this user information
- The API endpoint route should be located at the URL path "/signup"
- The Express application should be running on port 3000
- The response from this API should be in JSON format
- It should return all of the user's signup details (with the password masked)

### Testing with cURL

*Once all has been implemented successfully, you should be able to test the `/signup` endpoint with the following cURL command:*

`curl -X POST --data "email=example@email.com&phone=666-666-0666&birthday=04/04/2004&password=ShhItsAScecret" http://localhost:3000/api/signup`

---

#### <u>AS A REMINDER:</u> *Everything in this README is taken from the course modules of PWA (Programming of Web Applications WDV-3322 of Full Sail University) directly to explain and give further detail of the repository and the branches included*
