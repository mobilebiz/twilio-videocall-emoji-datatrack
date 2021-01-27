# twilio-videocall-emoji-datatrack

A basic video conference application built by using Twilio Data Track APIs with Live Emoji Overlay support.  
This project was forked from [Here](https://github.com/abhimanyu-bitsgoa/twilio-videocall-emoji-datatrack).  
And remake to Node.js & Twilio Serverless.

## Installation Instructions

To install the application on your system follow these steps:

1. [Create a Twilio account](https://cloudapi.kddi-web.com/signup) (if you don't have one yet). It's free!
2. [Generate an API Key](https://www.twilio.com/console/project/api-keys) for your account.
3. [Install twilio CLI](https://qiita.com/mobilebiz/items/456ce8b455f6aa84cc1e) (if you don't install it.)
4. [Install twilio CLI Serverless plugins](https://qiita.com/mobilebiz/items/fb4439bf162098e345ae) (if you don't install it.)
5. Clone this repository, and move to crone directory.
6. Execute `npm install`.
7. Create a _.env_ file by copying the _.env.example_ file. Fill out the values for your Twilio account's SID, AuthToken, API Key SID and API Key Secret.
8. Execute `npm start` to start local PC.
9. Navigate to [http://localhost:3000/index.html](http://localhost:3000/index.html) on your web browser. It's local test.
10. Execute `npm run deploy` to deploy twilio serverless server.
