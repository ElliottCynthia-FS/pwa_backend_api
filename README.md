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

### Assignment *(Week-3)*

*(Taken directly from the course Module)*

- Write a total of seven tests for the backend API
- Install Jest for testing API
- Install axios to NPM package in order for tests to properly call API

### The seven required test functions

| Test | Description |
| --- | -------------------------------------------------------------- |
| API is running | This test will check to make sure your backend API is up and running at all. You need to test if there is an established connection or not. |
| Signup endpoint is setup | This will send a POST request to the /signup endpoint and check if it does not respond with a 404 status code. |
| Signup endpoint works | This test will send a completely valid POST request to our /signup endpoint. We will check to make sure it responds with a 2xx status code which means it worked. | 
| Email validation works | This test will send only an invalid email to the /signup endpoint to check and see if it responds with a 422 response code. |
| Phone validation works | This test will send only an invalid phone to the /signup endpoint to check and see if it responds with a 422 response code. |
| Birthday validation works	| This test will send only an invalid birthday to the /signup endpoint to check and see if it responds with a 422 response code. |
| Password validation works	| This test will send only an invalid password to the /signup endpoint to check and see if it responds with a 422 response code. |


### Extra Information

- Jest official [Website](https://jestjs.io/) and [Docs](https://jestjs.io/docs/getting-started) 
- Remember: Jest is installed as a dev dependency because it is only used for testing during the development process.  It is not used during production. To install:
  - `npm install --save-dev jest`
- Axios official [Website](https://axios-http.com/) and [Docs](https://axios-http.com/docs/intro)
- Note that it is important to have the axios NPM package installed in order for your tests to properly call your API. If you do not have axios or any other kind of http fetch library installed your tests won't be effective at all. To install:
  - `npm install axios`

---

#### <u>AS A REMINDER:</u> *Everything in this README is taken from the course modules of PWA (Programming of Web Applications WDV-3322 of Full Sail University) directly to explain and give further detail of the repository and the branches included.  The course overview, assignments, and requirements of the assignments are not my own words.*
