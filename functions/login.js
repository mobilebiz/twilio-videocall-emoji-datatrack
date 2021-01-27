exports.handler = function (context, event, callback) {
  const response = new Twilio.Response();
  let headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
  response.setHeaders(headers);

  // Check parameters.
  console.log(`event.username: ${event.username}`);
  const IDENTITY = event.username || "";
  if (IDENTITY === "") callback(`Parameter 'username' was not set.`);

  const ACCOUNT_SID = context.ACCOUNT_SID;
  const API_KEY = context.API_KEY_SID;
  const API_SECRET = context.API_KEY_SECRET;

  // Create access token.
  const AccessToken = Twilio.jwt.AccessToken;
  const VideoGrant = AccessToken.VideoGrant;

  const videoGrant = new VideoGrant({
    room: "My Room",
  });

  const accessToken = new AccessToken(ACCOUNT_SID, API_KEY, API_SECRET, {
    ttl: 14400,
  });

  accessToken.addGrant(videoGrant);
  accessToken.identity = IDENTITY;

  response.setBody({
    token: accessToken.toJwt(),
  });
  callback(null, response);
};
