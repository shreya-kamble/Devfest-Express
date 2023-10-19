require('dotenv').config();
 const stackCreation = require('./index');
 const payload = {
   "event": "organization.create",
   "user": {
       "first_name": "mibax14131FFFF",
       "last_name": "mibax14131",
       "email": "shreya.kamble+8sept@contentstack.com", //change
      //  "email": "suraj.saroj@contentstack.com", //change
       "created_at": "2020-07-15T11:23:27.271Z",
       "domain": "mailvk.net",
       "uid": "bltfd60d310d1c39750"
   },
   "organization": {
    //    "uid": "blt92bbea21b8421529",//change
    //    "name": "ShreyaTesting",//change
    "uid": "bltfe9bd96cfedb9041",//change
    "name": "Dev11Shreya",//change
       "plan": {
           "_id": "5e8ec6f6754cbd0834ebffd9",
           "plan_id": "baba_plan",
           "name": "Baba Plan",
           "message": "",
           "blockedAssetTypes": [],
           "created_at": "2020-04-09T06:55:50.618Z",
           "updated_at": "2020-07-14T19:25:54.584Z",
           "deleted_at": false,
           "price": "$0",
           "active": true,
           "created_by": null,
           "updated_by": null,
           "tags": []
       },
    //    "stack_template": "e_commerce_template" //change
    "stack_template": "compass_starter" //change
   },
   "region": "US",
   "api_key": "_cs_superadmin",
   "isPostmanInvoked":false,
   "triggered_at": "2020-07-15T11:23:27.729Z"
 }

 let b = { Records: [ { body: JSON.stringify(payload) } ] }
 stackCreation.handler(b)






