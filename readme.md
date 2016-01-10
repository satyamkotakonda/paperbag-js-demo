#paperbag-js-demo#

##Prerequisites##
1. Install node modules by typing: **npm install** in command line
    + if you are on a mac you might need to type: **sudo npm install**
2. Install bower libraries by typing: **bower install** in command line

##Running Project##
+ You will need to place a **webconfig.json** placed in **app/controllers**
+ The format for the **webconfig.json**:
    
    ```
    {
        "settings": {
           "paypal": {
             "mode": "sandbox",
             "host": "api.sandbox.paypal.com",
             "client_id": "YOUR_CLIENT_ID_HERE",
             "client_secret": "YOUR_CLIENT_SECRET_HERE"
           },
           "stripe": {
             "mode": "",
             "host": "api.stripe.com",
             "id": "YOUR_STRIPE_ID_HERE"
           }
        }
    }
    ```
       
+ To **run** the server on port **8080**, open command line
+ Type **nohup node server.js &**

##Notes##