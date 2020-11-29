Motor Easy Tech Test
Node API to query mongoDB for information on tyres, and React App to search and display data

Website is hosted at https://motoreasytechtest.web.app/
Node API is hosted at https://motor-easy.herokuapp.com/

to run:
- clone repository

React App:
- yarn install
- create .env file with:

    REACT_APP_API_URL = {your local verison of API or Node API above}
    
- yarn run start

Node API:
- yarn install
- create .env file with:

    MONGO_USER = username
    
    MONGO_PW = password
    
- node app.js


